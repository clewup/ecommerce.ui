import "./product-tile.scss";
import { IProduct, ISize } from "../../../types/IProduct";
import React, { useContext, useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import { ShoppingCart as AddToCartIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/Auth";
import { CartContext } from "../../../contexts/Cart";
import { LoadingButton } from "@mui/lab";
import Carousel from "react-material-ui-carousel";
import Text from "../../atoms/Text/Text";
import { calculatePriceBeforeDiscount } from "../../../utils/calculatePriceBeforeDiscount";
import SizeSelector from "../SizeSelector/SizeSelector";
import BounceAnimation from "../../../lib/FramerMotion/BounceAnimation";
import ScaleAnimation from "../../../lib/FramerMotion/ScaleAnimation";

interface IProps {
  product: IProduct;
}

const ProductTile: React.FC<IProps> = ({ product }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { isLoading } = useContext(CartContext);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [isOutOfStock, setOutOfStock] = useState(false);
  const [selectedSize, setSelectedSize] = useState<ISize | undefined>(
    product.sizes?.filter((size) => size.stock > 0)[0]
  );

  useEffect(() => {
    if (product.sizes && product.oneSize === false) {
      let outOfStockCount = 0;

      product.sizes.forEach((size) => {
        if (size.stock === 0) outOfStockCount += 1;
      });
      setOutOfStock(outOfStockCount === product.sizes.length);
    }
  }, [product.oneSize, product.sizes]);

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
          {product.discount > 0 ? (
            <div className={"discounted-price"}>
              <Text className="discounted-price-striked">
                £{calculatePriceBeforeDiscount(product.price, product.discount)}
              </Text>
              <Text className={"discounted-price-total"}>£{product.price}</Text>
            </div>
          ) : (
            <Text>£{product.price}</Text>
          )}
        </div>
        <div className={"product-actions"}>
          {product.oneSize === false ? (
            <SizeSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
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
              disabled={isOutOfStock}
              className={"add-to-cart-btn"}
              onClick={() => {
                !isAuthenticated ? navigate("/login") : addToCart(product);
              }}
            >
              {!isOutOfStock ? (
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
