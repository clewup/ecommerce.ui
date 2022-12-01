import "./cart-items.scss";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import CartItem from "../../molecules/CartItem/CartItem";
import useCart from "../../../hooks/useCart";
import { ICartItem } from "../../../types/ICartItem";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import React, { useState } from "react";

const CartItems = () => {
  const [discountCode, setDiscountCode] = useState("");

  const { cart, appliedDiscountCode, applyDiscountCode } = useCart();

  console.log(cart);

  return (
    <div id={"cart-items"}>
      <Subheading size={subheadingSize.SMALL}>Cart</Subheading>
      {cart?.cartItems.map((cartItem: ICartItem) => {
        return <CartItem cartItem={cartItem} key={cartItem.name} />;
      })}
      <div className={"cart-shipping"}>
        <hr />
        <p>Estimated shipping costs</p>
        <p className={"shipping-price"}>£5.00</p>
      </div>
      <div className={"cart-discount"}>
        <hr />
        <p>Discount Code</p>
        <div className={"discount-input"}>
          <Input
            label={"Discount"}
            value={
              cart?.discountCode
                ? cart.discountCode.code
                : appliedDiscountCode?.code
            }
            onChange={(e) => setDiscountCode(e.target.value)}
            disabled={cart?.discountCode ? true : false}
          />
          <Button
            type={"button"}
            variant={"contained"}
            color={"success"}
            onClick={() => applyDiscountCode(discountCode)}
            disabled={cart?.discountCode ? true : false}
          >
            APPLY
          </Button>
        </div>
      </div>
      <div className={"cart-total"}>
        <p>Cart Total: £{cart?.total.toFixed(2) || "0"}</p>
      </div>
    </div>
  );
};
export default CartItems;
