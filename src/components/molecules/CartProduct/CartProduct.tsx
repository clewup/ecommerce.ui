import "./cart-product.scss";
import ClearIcon from "@mui/icons-material/Clear";
import useCart from "../../../hooks/useCart";
import React, { useContext } from "react";
import { ICartProduct } from "../../../types/IProduct";
import { CartContext } from "../../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import Text from "../../atoms/Text/Text";
import { calculatePriceBeforeDiscount } from "../../../utils/calculatePriceBeforeDiscount";

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
        <Text>
          {cartProduct.name.substring(0, 30)}
          {cartProduct.name.length >= 30 && "..."}
        </Text>
        <Text>{cartProduct.color}</Text>
        {cartProduct.discount > 0 ? (
          <div className={"discounted-price"}>
            <Text className="discounted-price-striked">
              £
              {calculatePriceBeforeDiscount(
                cartProduct.price,
                cartProduct.discount
              )}
            </Text>
            <Text className={"discounted-price-total"}>
              £{cartProduct.price}
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
