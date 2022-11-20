import "./add-product-form.scss";
import { useFormik } from "formik";
import useProduct from "../../../hooks/useProduct";

const AddProductForm = () => {
  const {
    initialValues,
    variant,
    setVariant,
    count,
    setCount,
    stock,
    addStock,
    createProduct,
  } = useProduct();

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => createProduct(values),
  });
  return (
    <div id={"add-product-form"}>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <input
          type={"text"}
          id={"name"}
          name={"name"}
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <label>Description</label>
        <input
          type={"text"}
          id={"description"}
          name={"description"}
          value={formik.values.description}
          onChange={formik.handleChange}
        />

        <label>Price Per Unit</label>
        <input
          type={"text"}
          id={"pricePerUnit"}
          name={"pricePerUnit"}
          value={formik.values.pricePerUnit}
          onChange={formik.handleChange}
        />

        <label>Discount</label>
        <input
          type={"text"}
          id={"discount"}
          name={"discount"}
          value={formik.values.discount}
          onChange={formik.handleChange}
        />

        <div className={"stock"}>
          <label>Variant</label>
          <input
            type={"text"}
            id={"variant"}
            name={"variant"}
            value={variant}
            onChange={(e) => setVariant(e.target.value)}
          />

          <label>Count</label>
          <input
            type={"text"}
            id={"count"}
            name={"count"}
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type={"button"} onClick={addStock}>
            Add Stock
          </button>
        </div>

        <button type={"submit"} disabled={stock.length === 0}>
          Add Product
        </button>
      </form>
    </div>
  );
};
export default AddProductForm;
