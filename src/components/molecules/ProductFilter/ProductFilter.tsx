import "./product-filter.scss";

const ProductFilter = () => {
  return (
    <div id={"product-filter"}>
      <div className={"product-filter-group"}>
        <label>Search</label>
        <input type={"text"} className={"product-search"} />
      </div>
      <div className={"product-filter-group"}>
        <label>Variant</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className={"product-filter-group"}>
        <label>Price</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className={"product-filter-group"}>
        <label>In stock</label>
        <input type={"checkbox"} />
      </div>
    </div>
  );
};
export default ProductFilter;
