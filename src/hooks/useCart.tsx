import { ICart } from "../types/ICart";
import { IProduct } from "../types/IProduct";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/Cart";
import { UserContext } from "../contexts/User";
import getCartByUserId from "../api/GetCartByUserId";
import { AxiosError } from "axios";
import putCart from "../api/PutCart";
import postCart from "../api/PostCart";
import { createGuid } from "../utils/CreateGuid";

const useCart = () => {
  const { cart, setCart, setLoading } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [error, setError] = useState<AxiosError | null>(null);

  const getCart = () => {
    if (user) {
      setLoading(true);
      getCartByUserId(user?.id!)
        .then((res) => setCart(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  };

  const addToCart = (product: IProduct) => {
    if (cart) {
      const updatedCart: ICart = cart;
      if (updatedCart.products.some((prod) => prod.id === product.id)) {
        // Update the cart.
        const existingProduct: IProduct = cart.products.find(
          (prod) => prod.id === product.id
        )!;
        updatedCart.products = [
          ...cart.products.filter((prod) => prod.id !== product.id),
          existingProduct,
        ];
      } else {
        updatedCart?.products.push(product);
      }
      setLoading(true);
      putCart(updatedCart)
        .then((res) => setCart(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else {
      // Create the cart.
      const createdCart: ICart = {
        id: createGuid(),
        userId: user?.id!,
        products: [product],
        total: 0,
      };
      setLoading(true);
      postCart(createdCart)
        .then((res) => setCart(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  };

  const removeFromCart = (product: IProduct) => {
    if (cart) {
      const updatedCart = cart;
      updatedCart.products = cart.products.filter(
        (prod) => prod.id !== product.id
      );
      setLoading(true);
      putCart(updatedCart)
        .then((res) => setCart(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  };

  return {
    getCart,
    addToCart,
    removeFromCart,
    error,
  };
};
export default useCart;
