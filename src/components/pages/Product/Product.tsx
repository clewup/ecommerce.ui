import "./product.scss";
import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { Guid } from "guid-typescript";
import Loader from "../../atoms/Loader/Loader";
import Wrapper from "../../atoms/Wrapper/Wrapper";
import AppError from "../../molecules/AppError/AppError";
import React, { useContext, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import { LoadingButton } from "@mui/lab";
import { ShoppingCart as AddToCartIcon } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { AuthContext } from "../../../contexts/Auth";
import { CartContext } from "../../../contexts/Cart";
import useCart from "../../../hooks/useCart";

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

  if (!product || isProductLoading) return <Loader />;
  if (error) return <AppError error={error} />;

  return (
    <Wrapper id={"product"}>
      <div className={"product-left"}>
        <div className={"product-image"}>
          <Carousel
            animation={"slide"}
            swipe={false}
            indicators={false}
            autoPlay={false}
          >
            {product.images.map((image) => (
              <img src={image.url!} alt={image.title} />
            ))}
          </Carousel>
        </div>
      </div>
      <div className={"product-right"}>
        <div className={"product-description"}>
          <Subheading size={subheadingSize.MEDIUM}>{product.name}</Subheading>
          <p>{product.description}</p>
        </div>

        <div className={"product-color"}>
          <Subheading size={subheadingSize.SMALL}>Color</Subheading>
          <p>{product.color}</p>
        </div>

        <div className={"product-price"}>
          <Subheading size={subheadingSize.SMALL}>Price</Subheading>
          {product.discount > 0 ? (
            <div className={"discounted-price"}>
              <p className="discounted-price-striked">
                £{((product.price / (100 - product.discount)) * 100).toFixed(2)}
              </p>
              <p className={"discounted-price-total"}>£{product.price}</p>
            </div>
          ) : (
            <p>£{product.price}</p>
          )}
        </div>

        <div className={"product-checkout"}>
          <Subheading size={subheadingSize.SMALL}>Treat Yourself</Subheading>
          <Tooltip title={"Add to Cart"}>
            <LoadingButton
              color="success"
              type={"button"}
              variant={"contained"}
              loading={isCartLoading}
              disabled={product.stock === 0}
              onClick={() => {
                !isAuthenticated ? navigate("/login") : addToCart(product);
              }}
            >
              {product.stock !== 0 ? <AddToCartIcon /> : "OUT OF STOCK"}
            </LoadingButton>
          </Tooltip>
        </div>
      </div>
    </Wrapper>
  );
};
export default Product;
