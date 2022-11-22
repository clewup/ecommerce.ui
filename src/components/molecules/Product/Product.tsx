import "./product.scss";
import { IProduct } from "../../../types/IProduct";
import React, { useState } from "react";
import useCart from "../../../hooks/useCart";

interface IProps {
  product: IProduct;
}

const Product: React.FC<IProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [variant, setVariant] = useState("");

  const { addToCart } = useCart();

  return (
    <div id={"product"}>
      <div className={"product-title"}>{product.name}</div>
      <div className={"product-image"}>
        <img
          src={
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={product.name}
        />
      </div>
      <div className={"product-info"}>
        <select value={variant} onChange={(e) => setVariant(e.target.value)}>
          {product.stock.map((stock) => {
            return (
              <option key={stock.variant} value={stock.variant}>
                {stock.variant}
              </option>
            );
          })}
        </select>
        <p>{product.description}</p>
      </div>
      <div className={"product-actions"}>
        <input
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={() => addToCart(product, quantity, variant)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
