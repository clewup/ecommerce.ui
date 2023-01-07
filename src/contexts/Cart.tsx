import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { ICart } from "../interfaces/ICart";

interface IProps {
  children: JSX.Element;
}

interface ICartContextProps {
  cart: ICart | undefined;
  setCart: Dispatch<SetStateAction<ICart | undefined>>;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const initialCartContextProps: ICartContextProps = {
  cart: undefined,
  setCart: (() => undefined) as Dispatch<any>,
  isLoading: false,
  setLoading: (() => undefined) as Dispatch<any>,
};

const CartContext = createContext<ICartContextProps>(initialCartContextProps);

const CartProvider = ({ children }: IProps) => {
  const [cart, setCart] = useState<ICart>();
  const [isLoading, setLoading] = useState(false);

  return (
    <CartContext.Provider value={{ cart, setCart, isLoading, setLoading }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
