import { ICart } from "../interfaces/ICart";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/Cart";
import { UserContext } from "../contexts/User";
import getUserCart from "../api/GetUserCart";
import { AxiosError } from "axios";
import putCart from "../api/PutCart";
import postCart from "../api/PostCart";
import { Guid } from "guid-typescript";
import { createGuid } from "../utils/createGuid";
import { IProduct } from "../interfaces/IProduct";

interface IUseCartProps {
  getCart: () => void;
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  error: AxiosError | null;
}

const useCart = (): IUseCartProps => {
  const { cart, setCart, setLoading } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [error, setError] = useState<AxiosError | null>(null);

  const getCart = () => {
    if (user) {
      setLoading(true);
      getUserCart()
        .then((res) => {
          if (res.status === 204) setCart(undefined);
          else setCart(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  };

  const addToCart = (product: IProduct) => {
    if (cart && cart.id) {
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
        id: createGuid() as Guid,
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
    if (cart && cart.id) {
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
