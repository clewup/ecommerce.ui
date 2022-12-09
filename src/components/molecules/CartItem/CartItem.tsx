import "./cart-item.scss";
import ClearIcon from "@mui/icons-material/Clear";
import useCart from "../../../hooks/useCart";
import React, { useContext } from "react";
import { IProduct } from "../../../types/IProduct";
import { CartContext } from "../../../contexts/Cart";
import Loader from "../../atoms/Loader/Loader";

interface IProps {
  cartItem: IProduct;
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
            <img
              src={
                cartItem.images.length > 0
                  ? cartItem.images![0]!.url!
                  : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              alt={cartItem.name}
            />
          </div>
          <div className={"cart-item-info"}>
            <p>{cartItem.name}</p>
            <p>£{cartItem.pricePerUnit.toFixed(2)}</p>
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
