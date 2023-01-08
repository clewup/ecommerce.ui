import "./product-tile.scss";
import { IProduct } from "../../../interfaces/IProduct";
import React, { useContext } from "react";
import useCart from "../../../hooks/useCart";
import { ShoppingCart as AddToCartIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";
import { CartContext } from "../../../contexts/Cart";
import { LoadingButton } from "@mui/lab";
import Carousel from "react-material-ui-carousel";
import Text from "../../atoms/Text/Text";
import {
  BounceAnimation,
  ScaleAnimation,
} from "../../../lib/FramerMotion/animations";
import { productSizes } from "../../../enums/productSizes";

interface IProps {
  product: IProduct;
}

const ProductTile: React.FC<IProps> = ({ product }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { isLoading } = useContext(CartContext);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div id={"product-tile"}>
      <BounceAnimation>
        <div className={"product-title"}>{product.name}</div>

        <div
          className={"product-image"}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <Carousel
            animation={"slide"}
            swipe={false}
            indicators={false}
            autoPlay={false}
          >
            {product.images.map((image) => (
              <img src={image} alt={image} key={image} />
            ))}
          </Carousel>
        </div>
        <div className={"product-info"}>
          <Text>{product.color}</Text>
          {product.discountedPrice ? (
            <div className={"discounted-price"}>
              <Text className="discounted-price-striked">£{product.price}</Text>
              <Text className={"discounted-price-total"}>
                £{product.discountedPrice}
              </Text>
            </div>
          ) : (
            <Text>£{product.price}</Text>
          )}
        </div>
        <div className={"product-actions"}>
          {product.size !== productSizes.ONESIZE ? (
            <Text>{product.size}</Text>
          ) : (
            <div className={"one-size"}>
              <Text>One Size</Text>
            </div>
          )}

          <ScaleAnimation>
            <LoadingButton
              color="success"
              type={"button"}
              variant={"contained"}
              loading={isLoading}
              disabled={product.stock === 0}
              className={"add-to-cart-btn"}
              onClick={() => {
                !isAuthenticated ? navigate("/login") : addToCart(product);
              }}
            >
              {product.stock > 0 ? (
                <>
                  <AddToCartIcon />
                  Add to Cart
                </>
              ) : (
                <>
                  <AddToCartIcon />
                  Out of Stock
                </>
              )}
            </LoadingButton>
          </ScaleAnimation>
        </div>
      </BounceAnimation>
    </div>
  );
};
export default ProductTile;
