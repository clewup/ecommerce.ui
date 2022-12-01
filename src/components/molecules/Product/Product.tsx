import "./product.scss";
import { IProduct } from "../../../types/IProduct";
import React, { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import SelectInput from "../../atoms/SelectInput/SelectInput";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import { ShoppingCart as AddToCartIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [variants, setVariants] = useState<string[]>([]);
  const [variant, setVariant] = useState<string>(product.stock[0].variant);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    product.stock.forEach((stock) => {
      setVariants((prevState) => {
        return [...prevState, stock.variant];
      });
    });
  }, [product.stock]);

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
        <SelectInput
          value={variant}
          onChange={(e) => setVariant(e.target.value)}
          options={variants}
        />
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
          onClick={() => addToCart(product, quantity, variant)}
          disabled={!quantity || !variant}
        >
          <AddToCartIcon />
        </Button>
      </div>
    </div>
  );
};
export default Product;
