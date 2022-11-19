import "./cart-item.scss";

const CartItem = () => {
  return (
    <div id={"cart-item"}>
      <div className={"cart-item-image"}>
        <img
          src={
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={"cart-item"}
        />
      </div>
      <div className={"cart-item-info"}>
        <p>Product 1</p>
        <p>Variant</p>
        <p>Price & Quantity</p>
      </div>
    </div>
  );
};
export default CartItem;
