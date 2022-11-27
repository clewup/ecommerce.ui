import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ICart } from "../types/ICart";

interface IProps {
  children: JSX.Element;
}

interface CartContextProps {
  cart?: ICart;
  setCart?: Dispatch<SetStateAction<ICart | undefined>>;
}

const CartContext = createContext<CartContextProps>({});

const CartProvider = ({ children }: IProps) => {
  const [cart, setCart] = useState<ICart | undefined>(
    JSON.parse(localStorage.getItem("cart")!)
      ? JSON.parse(localStorage.getItem("cart")!)
      : undefined
  );

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
