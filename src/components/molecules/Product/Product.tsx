import "./product.scss";

const Product = () => {
  return (
    <div id={"product"}>
      <div className={"product-title"}>PRODUCT 1</div>
      <div className={"product-image"}>
        <img
          src={
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          alt={"product"}
        />
      </div>
      <div className={"product-info"}>
        <p>PRODUCT 1 INFO</p>
      </div>
    </div>
  );
};
export default Product;
