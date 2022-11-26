import { ICartItem } from "../types/ICartItem";
import { ICart } from "../types/ICart";
import { IProduct } from "../types/IProduct";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/Cart";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: IProduct, quantity: number, variant: string) => {
    const addedCartItem = convertToCartItem(product, quantity, variant);

    if (cart && addedCartItem) {
      //Add item to the cart.
      const updatedCart: ICart = {
        cartItems: [...cart.cartItems, addedCartItem],
        total: 0,
      };

      //Calculate total price.
      let total = 0;
      updatedCart.cartItems.map((cartItem: ICartItem) => {
        total = total + cartItem.pricePerUnit * cartItem.quantity;
        return null;
      });
      updatedCart.total = total;

      setCart?.(updatedCart);
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
      //Remove item from the cart.
      const updatedCartItems = cart.cartItems.filter(
        (cartItem: ICartItem) => cartItem.id !== removedCartItem.id
      );
      const updatedCart = {
        cartItems: updatedCartItems,
        total: 0,
      };

      //Calculate total price.
      let total = 0;
      updatedCart.cartItems.map((cartItem: ICartItem) => {
        total = total + cartItem.pricePerUnit * cartItem.quantity;
      });
      updatedCart.total = total;

      setCart?.(updatedCart);
    }
  };

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

  return { cart, addToCart, removeFromCart };
};
export default useCart;
