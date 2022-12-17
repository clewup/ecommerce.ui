import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { ICart } from "../types/ICart";

interface IProps {
  children: JSX.Element;
}

interface ICartContextProps {
  cart: ICart;
  setCart: Dispatch<SetStateAction<ICart>>;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const initialCartContextProps: ICartContextProps = {
  cart: {} as ICart,
  setCart: (() => undefined) as Dispatch<any>,
  isLoading: false,
  setLoading: (() => undefined) as Dispatch<any>,
};

const CartContext = createContext<ICartContextProps>(initialCartContextProps);

const CartProvider = ({ children }: IProps) => {
  const [cart, setCart] = useState<ICart>({} as ICart);
  const [isLoading, setLoading] = useState(false);

  return (
    <CartContext.Provider value={{ cart, setCart, isLoading, setLoading }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
