import "./cart-product.scss";
import ClearIcon from "@mui/icons-material/Clear";
import useCart from "../../../hooks/useCart";
import React, { useContext } from "react";
import { ICartProduct } from "../../../types/IProduct";
import { CartContext } from "../../../contexts/Cart";

interface IProps {
  cartProduct: ICartProduct;
}

const CartProduct: React.FC<IProps> = ({ cartProduct }) => {
  const { removeFromCart } = useCart();
  const { isLoading } = useContext(CartContext);

  return (
    <div id={"cart-product"}>
      <div className={"cart-product-image"}>
        <img src={cartProduct.images![0]!.url!} alt={cartProduct.name} />
      </div>
      <div className={"cart-product-info"}>
        <p>{cartProduct.name}</p>
        <p>£{cartProduct.price.toFixed(2)}</p>
      </div>
      <div className={"cart-product-remove"}>
        <ClearIcon onClick={() => !isLoading && removeFromCart(cartProduct)} />
      </div>
    </div>
  );
};
export default CartProduct;
