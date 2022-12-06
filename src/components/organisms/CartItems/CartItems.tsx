import "./cart-items.scss";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import CartItem from "../../molecules/CartItem/CartItem";
import useCart from "../../../hooks/useCart";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../contexts/Cart";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const [discountCode, setDiscountCode] = useState("");

  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { getCart } = useCart();

  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, []);

  return (
    <div id={"cart-items"}>
      <Subheading size={subheadingSize.SMALL}>Cart</Subheading>
      {cart?.products?.map((product) => {
        return <CartItem cartItem={product} key={product.name} />;
      })}

      <div className={"cart-discount"}>
        <p>Discount Code</p>
        <div className={"discount-input"}>
          <Input
            label={"Discount"}
            onChange={(e) => setDiscountCode(e.target.value)}
            value={discountCode}
          />
          <Button
            type={"button"}
            variant={"contained"}
            color={"success"}
            size={"large"}
          >
            APPLY
          </Button>
        </div>
      </div>
      {/*<div className={"cart-shipping"}>
        <p>Estimated shipping costs</p>
        <p className={"shipping-price"}>£5.00</p>
      </div>*/}
      <div className={"cart-total"}>
        <p>Cart Total: £{cart?.total.toFixed(2) || "0"}</p>
      </div>
      <div className={"cart-action-buttons"}>
        <Button
          size={"large"}
          type={"submit"}
          variant={"contained"}
          color={"success"}
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};
export default CartItems;
