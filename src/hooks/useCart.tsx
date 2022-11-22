import { ICartItem } from "../types/ICartItem";
import { ICart } from "../types/ICart";
import { IProduct } from "../types/IProduct";

const useCart = () => {
  const getCart = () => {
    const cartString = localStorage.getItem("cart");
    if (cartString) {
      const cartJson = JSON.parse(cartString) as ICart;
      return cartJson;
    } else {
      return null;
    }
  };

  const addToCart = (product: IProduct, quantity: number, variant: string) => {
    let cart = getCart();

    const addedCartItem = convertToCartItem(product, quantity, variant);

    if (cart && addedCartItem) {
      //Add item to the cart.
      cart.cartItems.push(addedCartItem);

      //Calculate total price.
      let total = 0;
      cart.cartItems.map((cartItem: ICartItem) => {
        total = total + cartItem.pricePerUnit * cartItem.quantity;
      });
      cart.total = total;

      //Update local storage.
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      //Create the cart.
      cart = {
        cartItems: [addedCartItem],
        total: addedCartItem.pricePerUnit * addedCartItem.quantity,
      };

      //Set the local storage.
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  const removeFromCart = (removedCartItem: ICartItem) => {
    let cart = getCart();

    if (cart) {
      //Remove item from the cart.
      const updatedCartItems = cart.cartItems.filter(
        (cartItem: ICartItem) => cartItem !== removedCartItem
      );
      cart = {
        cartItems: updatedCartItems,
        total: 0,
      };

      //Calculate total price.
      let total = 0;
      cart.cartItems.map((cartItem: ICartItem) => {
        total = total + cartItem.pricePerUnit * cartItem.quantity;
      });
      cart.total = total;

      //Update local storage.
      localStorage.setItem("cart", JSON.stringify(cart));
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

  return { getCart, addToCart, removeFromCart };
};
export default useCart;
