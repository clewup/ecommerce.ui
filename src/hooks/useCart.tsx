import { ICartItem } from "../types/ICartItem";
import { ICart } from "../types/ICart";
import { IProduct } from "../types/IProduct";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/Cart";
import { IDiscountCode } from "../types/IDiscountCode";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [appliedDiscountCode, setAppliedDiscountCode] =
    useState<IDiscountCode>();

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const convertToCartItem = (
    product: IProduct,
    quantity: number,
    variant: string
  ) => {
    const cartItem: ICartItem = {
      id: product.id,
      name: product.name,
      variant: variant,
      quantity: quantity,
      pricePerUnit: product.pricePerUnit,
      isDiscounted: product.isDiscounted,
      discount: product.discount,
    };
    return cartItem;
  };

  const DISCOUNT_CODES: IDiscountCode[] = [
    {
      code: "50OFF",
      percentOff: 50,
    },
    {
      code: "25OFF",
      percentOff: 25,
    },
    {
      code: "10OFF",
      percentOff: 10,
    },
  ];

  const applyDiscountCode = (discountCode: string) => {
    // Looks for a matching discount.
    const foundDiscountCode = DISCOUNT_CODES.find(
      (discount) => discount.code === discountCode
    );

    if (cart && !cart.discountCode && foundDiscountCode) {
      setAppliedDiscountCode(foundDiscountCode);
      const discountedCart = cart;
      discountedCart.discountCode = foundDiscountCode;
      discountedCart.total = (foundDiscountCode.percentOff / 100) * cart.total;
      setCart?.(discountedCart);
      localStorage.setItem("cart", JSON.stringify(discountedCart));
    }
  };

  const removeDiscountCode = () => {
    if (cart) {
      let total = 0;
      let totalledCart = cart;

      totalledCart.cartItems.map((cartItem: ICartItem) => {
        total = total + cartItem.pricePerUnit * cartItem.quantity;
        return null;
      });

      const undiscountedCart: ICart = {
        cartItems: cart.cartItems,
        total: total,
      };

      setAppliedDiscountCode(undefined);
      setCart?.(undiscountedCart);
      localStorage.setItem("cart", JSON.stringify(undiscountedCart));
    }
  };

  const calculateTotal = (cart: ICart) => {
    let totalledCart = cart;
    let total = 0;

    //Calculate total price.
    totalledCart.cartItems.map((cartItem: ICartItem) => {
      total = total + cartItem.pricePerUnit * cartItem.quantity;
      return null;
    });

    if (cart.discountCode) {
      totalledCart.total = (cart.discountCode.percentOff / 100) * total;
      return totalledCart;
    } else if (appliedDiscountCode) {
      totalledCart.total = (appliedDiscountCode.percentOff / 100) * total;
      return totalledCart;
    } else {
      totalledCart.total = total;
      return totalledCart;
    }
  };

  const addToCart = (product: IProduct, quantity: number, variant: string) => {
    const addedCartItem = convertToCartItem(product, quantity, variant);

    if (cart && addedCartItem) {
      //Add item to the cart.

      //If already in the basket, update the quantity.
      if (cart.cartItems.some((cartItem) => cartItem.id === addedCartItem.id)) {
        const currentCartItem: ICartItem = cart.cartItems.find(
          (cartItem) => cartItem.id === addedCartItem.id
        )!;
        currentCartItem.quantity =
          currentCartItem.quantity + addedCartItem.quantity;

        const updatedCart: ICart = {
          cartItems: [
            ...cart.cartItems.filter(
              (cartItem) => cartItem.id !== addedCartItem.id
            ),
            currentCartItem,
          ],
          discountCode: cart.discountCode,
          total: 0,
        };
        const totalledCart = calculateTotal(updatedCart);
        setCart?.(totalledCart);
      }
      //If not already in the basket, add to the array,
      else {
        const updatedCart: ICart = {
          cartItems: [...cart.cartItems, addedCartItem],
          discountCode: cart.discountCode,
          total: 0,
        };
        const totalledCart = calculateTotal(updatedCart);
        setCart?.(totalledCart);
      }
    } else {
      //Create the cart.
      const createdCart: ICart = {
        cartItems: [addedCartItem],
        total: addedCartItem.pricePerUnit * addedCartItem.quantity,
      };

      setCart?.(createdCart);
    }
  };

  const removeFromCart = (removedCartItem: ICartItem) => {
    if (cart) {
      const updatedCartItems = cart.cartItems.filter(
        (cartItem: ICartItem) => cartItem.id !== removedCartItem.id
      );

      const updatedCart: ICart = {
        cartItems: updatedCartItems,
        discountCode: cart.discountCode,
        total: 0,
      };

      const totalledCart = calculateTotal(updatedCart);
      setCart?.(totalledCart);
    }
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    appliedDiscountCode,
    applyDiscountCode,
    removeDiscountCode,
  };
};
export default useCart;
