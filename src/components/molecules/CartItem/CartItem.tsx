import "./cart-item.scss";
import ClearIcon from "@mui/icons-material/Clear";
import useCart from "../../../hooks/useCart";
import React, { useContext } from "react";
import { ICartProduct } from "../../../types/IProduct";
import { CartContext } from "../../../contexts/Cart";
import Loader from "../../atoms/Loader/Loader";

interface IProps {
  cartItem: ICartProduct;
}

const CartItem: React.FC<IProps> = ({ cartItem }) => {
  const { removeFromCart } = useCart();
  const { isLoading } = useContext(CartContext);

  return (
    <div id={"cart-item"}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={"cart-item-image"}>
            <img src={cartItem.images![0]!.url!} alt={cartItem.name} />
          </div>
          <div className={"cart-item-info"}>
            <p>{cartItem.name}</p>
            <p>£{cartItem.price.toFixed(2)}</p>
          </div>
          <div className={"cart-remove-item"}>
            <ClearIcon onClick={() => removeFromCart(cartItem)} />
          </div>
        </>
      )}
    </div>
  );
};
export default CartItem;
