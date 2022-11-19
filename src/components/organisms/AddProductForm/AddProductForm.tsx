import "./add-product-form.scss";
import { useEffect, useState } from "react";
import { FormikValues, useFormik } from "formik";
import { createGuid } from "../../../utils/CreateGuid";
import PostProduct from "../../../api/postProduct";
import { IProduct, IStock } from "../../../types/IProduct";

const AddProductForm = () => {
  const [variant, setVariant] = useState("");
  const [count, setCount] = useState("0");
  const [stock, setStock] = useState<IStock[]>([]);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    if (product) {
      PostProduct(product);
    }
  }, [product]);

  const handleSubmit = (values: FormikValues) => {
    const payload = {
      id: createGuid(),
      name: values.name,
      description: values.description,
      stock: stock,
      pricePerUnit: parseFloat(values.pricePerUnit),
      isDiscounted: parseFloat(values.discount) > 0,
      discount: parseFloat(values.discount),
    };
    setProduct(payload);
  };

  const addStock = () => {
    setStock((prev: IStock[]) => {
      return [
        ...prev,
        {
          variant,
          count: parseInt(count),
        },
      ];
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      pricePerUnit: "",
      discount: 0,
    },
    onSubmit: (values) => handleSubmit(values),
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
