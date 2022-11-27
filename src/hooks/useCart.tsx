import { ICartItem } from "../types/ICartItem";
import { ICart } from "../types/ICart";
import { IProduct } from "../types/IProduct";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/Cart";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

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

  const calculateTotal = (cart: ICart) => {
    let totalledCart = cart;
    let total = 0;

    //Calculate total price.
    totalledCart.cartItems.map((cartItem: ICartItem) => {
      total = total + cartItem.pricePerUnit * cartItem.quantity;
      return null;
    });
    totalledCart.total = total;
    return totalledCart;
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
          total: 0,
        };
        const totalledCart = calculateTotal(updatedCart);
        setCart?.(totalledCart);
      }
      //If not already in the basket, add to the array,
      else {
        const updatedCart: ICart = {
          cartItems: [...cart.cartItems, addedCartItem],
          total: 0,
        };
        const totalledCart = calculateTotal(updatedCart);
        setCart?.(totalledCart);
      }
    } else {
      //Create the cart.
      const createdCart = {
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
      const updatedCart = {
        cartItems: updatedCartItems,
        total: 0,
      };

      const totalledCart = calculateTotal(updatedCart);
      setCart?.(totalledCart);
    }
  };

  return { cart, addToCart, removeFromCart };
};
export default useCart;
