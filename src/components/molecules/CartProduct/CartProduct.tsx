import "./cart-product.scss";
import ClearIcon from "@mui/icons-material/Clear";
import useCart from "../../../hooks/useCart";
import React, { useContext } from "react";
import { CartContext } from "../../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import Text from "../../atoms/Text/Text";
import { IProduct } from "../../../interfaces/IProduct";

interface IProps {
  cartProduct: IProduct;
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
        <img src={cartProduct.images![0]!} alt={cartProduct.images![0]!} />
      </div>
      <div className={"cart-product-info"}>
        <Text>
          {cartProduct.name.substring(0, 30)}
          {cartProduct.name.length >= 30 && "..."}
        </Text>
        <Text>{cartProduct.color}</Text>
        {cartProduct.discountedPrice ? (
          <div className={"discounted-price"}>
            <Text className="discounted-price-striked">
              £{cartProduct.price}
            </Text>
            <Text className={"discounted-price-total"}>
              £{cartProduct.discountedPrice}
            </Text>
          </div>
        ) : (
          <Text>£{cartProduct.price}</Text>
        )}
      </div>
      <div className={"cart-product-remove"}>
        <ClearIcon
          onClick={() => !isLoading && removeFromCart(cartProduct)}
          className={"cart-product-remove-btn"}
        />
      </div>
    </div>
  );
};
export default CartProduct;
