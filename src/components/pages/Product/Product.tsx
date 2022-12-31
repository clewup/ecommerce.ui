import "./product.scss";
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { Guid } from "guid-typescript";
import Loader from "../../atoms/Loader/Loader";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import AppError from "../../molecules/AppError/AppError";
import React, { useContext, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Subheading from "../../atoms/Subheading/Subheading";
import { LoadingButton } from "@mui/lab";
import { ShoppingCart as AddToCartIcon } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { AuthContext } from "../../../contexts/Auth";
import { CartContext } from "../../../contexts/Cart";
import useCart from "../../../hooks/useCart";
import Text from "../../atoms/Text/Text";
import { subheadingSize } from "../../../enums/typography";
import { calculatePriceBeforeDiscount } from "../../../utils/calculatePriceBeforeDiscount";

const Product = () => {
  const { id } = useParams();
  const {
    product,
    isLoading: isProductLoading,
    error,
    getProduct,
  } = useProduct();
  const { isAuthenticated } = useContext(AuthContext);
  const { isLoading: isCartLoading } = useContext(CartContext);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProduct(Guid.parse(id));
    }
    // eslint-disable-next-line
  }, [id]);

  if (error) return <AppError error={error} />;

  return (
    <Wrapper id={"product"}>
      {isProductLoading || !product.id ? (
        <Loader />
      ) : (
        <>
          <div className={"product-left"}>
            <div className={"product-image"}>
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
          </div>
          <div className={"product-right"}>
            <div className={"product-description"}>
              <Subheading>{product.name}</Subheading>
              <Text>{product.description}</Text>
            </div>

            <div className={"product-color"}>
              <Subheading size={subheadingSize.SMALL}>Color</Subheading>
              <Text>{product.color}</Text>
            </div>

            <div className={"product-price"}>
              <Subheading size={subheadingSize.SMALL}>Price</Subheading>
              {product.discount > 0 ? (
                <div className={"discounted-price"}>
                  <Text className="discounted-price-striked">
                    £
                    {calculatePriceBeforeDiscount(
                      product.price,
                      product.discount
                    )}
                  </Text>
                  <Text className={"discounted-price-total"}>
                    £{product.price}
                  </Text>
                </div>
              ) : (
                <Text>£{product.price}</Text>
              )}
            </div>

            <div className={"product-checkout"}>
              <Subheading size={subheadingSize.SMALL}>
                Treat Yourself
              </Subheading>
              <Tooltip title={"Add to Cart"}>
                <LoadingButton
                  color="success"
                  type={"button"}
                  variant={"contained"}
                  loading={isCartLoading}
                  disabled={product.stock === 0}
                  className={"add-to-cart-btn"}
                  onClick={() => {
                    !isAuthenticated ? navigate("/login") : addToCart(product);
                  }}
                >
                  {product.stock !== 0 ? <AddToCartIcon /> : "OUT OF STOCK"}
                </LoadingButton>
              </Tooltip>
            </div>
          </div>
        </>
      )}
    </Wrapper>
  );
};
export default Product;
