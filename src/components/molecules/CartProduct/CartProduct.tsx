import "./cart-product.scss";
import ClearIcon from "@mui/icons-material/Clear";
import useCart from "../../../hooks/useCart";
import React, { useContext } from "react";
import { ICartProduct } from "../../../types/IProduct";
import { CartContext } from "../../../contexts/Cart";
import { useNavigate } from "react-router-dom";

interface IProps {
  cartProduct: ICartProduct;
}

const CartProduct: React.FC<IProps> = ({ cartProduct }) => {
  const { removeFromCart } = useCart();
  const { isLoading } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div id={"cart-product"}>
      <div
        className={"cart-product-image"}
        onClick={() => navigate(`/product/${cartProduct.id}`)}
      >
        <img src={cartProduct.images![0]!.url!} alt={cartProduct.name} />
      </div>
      <div className={"cart-product-info"}>
        <p>{cartProduct.name}</p>
        <p>{cartProduct.color}</p>
        {cartProduct.discount > 0 ? (
          <div className={"discounted-price"}>
            <p className="discounted-price-striked">
              £
              {(
                (cartProduct.price / (100 - cartProduct.discount)) *
                100
              ).toFixed(2)}
            </p>
            <p className={"discounted-price-total"}>£{cartProduct.price}</p>
          </div>
        ) : (
          <p>£{cartProduct.price}</p>
        )}
      </div>
      <div className={"cart-product-remove"}>
        <ClearIcon onClick={() => !isLoading && removeFromCart(cartProduct)} />
      </div>
    </div>
  );
};
export default CartProduct;
