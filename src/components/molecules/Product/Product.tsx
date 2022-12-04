import "./product.scss";
import { IProduct } from "../../../types/IProduct";
import React, { useContext, useState } from "react";
import useCart from "../../../hooks/useCart";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import { ShoppingCart as AddToCartIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/User";
import { AuthContext } from "../../../contexts/Auth";

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
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
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={product.name}
        />
      </div>
      <div className={"product-info"}>
        <p>{product.description}</p>
        <p>£{product.pricePerUnit}</p>
      </div>
      <div className={"product-actions"}>
        <Input
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          width={"3rem"}
        />
        <Button
          color="success"
          type={"button"}
          variant={"contained"}
          onClick={() => {
            !user && !isAuthenticated
              ? navigate("/login")
              : addToCart(product, quantity);
          }}
          disabled={!quantity}
        >
          <AddToCartIcon />
        </Button>
      </div>
    </div>
  );
};
export default Product;
