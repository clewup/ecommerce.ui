import "./cart-products.scss";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import CartProduct from "../../molecules/CartProduct/CartProduct";
import useCart from "../../../hooks/useCart";
import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { CartContext } from "../../../contexts/Cart";
import { useNavigate } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Loader from "../../atoms/Loader/Loader";

const CartProducts = () => {
  const navigate = useNavigate();
  const { cart, isLoading } = useContext(CartContext);
  const { getCart } = useCart();

  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, []);

  return (
    <div id={"cart-products"}>
      <Subheading size={subheadingSize.SMALL}>Cart</Subheading>
      {isLoading ? (
        <Loader color={"#333"} />
      ) : (
        <>
          {cart?.products?.length === 0 || cart == null || !cart.products ? (
            <p className={"empty-cart"}>
              Your cart is empty. <RemoveShoppingCartIcon />
            </p>
          ) : null}

          {cart?.products?.map((cartProduct) => {
            return (
              <CartProduct
                cartProduct={cartProduct}
                key={String(cartProduct.id)}
              />
            );
          })}

          <div className={"cart-total"}>
            <p>Cart Total: £{cart?.total?.toFixed(2) || "0"}</p>
          </div>
          <div className={"cart-action-buttons"}>
            <Button
              size={"large"}
              type={"submit"}
              variant={"contained"}
              color={"success"}
              onClick={() => navigate("/checkout")}
              disabled={cart?.products?.length === 0 || isLoading}
            >
              CHECKOUT
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
export default CartProducts;
