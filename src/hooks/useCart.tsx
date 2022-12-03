import { ICartItem } from "../types/ICartItem";
import { ICart } from "../types/ICart";
import { IProduct } from "../types/IProduct";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/Cart";
import { IDiscountCode } from "../types/IDiscountCode";
import { UserContext } from "../contexts/User";
import getCart from "../api/GetCart";
import { AxiosError } from "axios";
import putCart from "../api/PutCart";
import postCart from "../api/PostCart";
import { createGuid } from "../utils/CreateGuid";

const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    if (user) {
      setLoading(true);
      getCart(user?.id!)
        .then((res) => setCart?.(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
    // eslint-disable-next-line
  }, []);

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

    if (cart && foundDiscountCode) {
      const discountedCart = cart;

      discountedCart.discountCode = foundDiscountCode;
      discountedCart.discountedTotal = 0;

      setLoading(true);
      putCart(discountedCart)
        .then((res) => setCart?.(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  };

  const removeDiscountCode = () => {
    if (cart) {
      const discountedCart: ICart = cart;

      discountedCart.discountCode = null;
      discountedCart.discountedTotal = null;

      setLoading(true);
      putCart(discountedCart)
        .then((res) => setCart?.(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  };

  const addToCart = (product: IProduct, quantity: number, variant: string) => {
    const cartItem = convertToCartItem(product, quantity, variant);

    if (cart) {
      const updatedCart: ICart = cart;
      updatedCart?.cartItems.push(cartItem);

      setLoading(true);
      putCart(updatedCart)
        .then((res) => setCart?.(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else {
      const createdCart: ICart = {
        id: createGuid(),
        userId: user?.id!,
        cartItems: [cartItem],
        total: 0,
        discountCode: null,
        discountedTotal: null,
      };

      setLoading(true);
      postCart(createdCart)
        .then((res) => setCart?.(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  };

  const removeFromCart = (removedCartItem: ICartItem) => {
    if (cart) {
      const updatedCart = cart;
      updatedCart.cartItems.filter(
        (cartItem: ICartItem) => cartItem.id !== removedCartItem.id
      );

      setLoading(true);
      putCart(updatedCart)
        .then((res) => setCart?.(res.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }
  };

  return {
    cart,
    isLoading,
    error,
    addToCart,
    removeFromCart,
    applyDiscountCode,
    removeDiscountCode,
  };
};
export default useCart;
