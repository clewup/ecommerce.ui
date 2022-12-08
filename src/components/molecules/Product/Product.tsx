import "./product.scss";
import { IProduct } from "../../../types/IProduct";
import React, { useContext } from "react";
import useCart from "../../../hooks/useCart";
import { Button } from "@mui/material";
import { ShoppingCart as AddToCartIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/User";
import { AuthContext } from "../../../contexts/Auth";

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const { user } = useContext(UserContext);
  const { isAuthenticated } = useContext(AuthContext);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div id={"product"}>
      <div className={"product-title"}>{product.name}</div>
      <div
        className={"product-image"}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img
          src={
            product.images.length > 0
              ? product.images![0]!.url!
              : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={product.name}
        />
      </div>
      <div className={"product-info"}>
        <p>{product.description}</p>
        <p>£{product.pricePerUnit}</p>
      </div>
      <div className={"product-actions"}>
        <Button
          color="success"
          type={"button"}
          variant={"contained"}
          onClick={() => {
            !user && !isAuthenticated ? navigate("/login") : addToCart(product);
          }}
        >
          <AddToCartIcon />
        </Button>
      </div>
    </div>
  );
};
export default Product;
