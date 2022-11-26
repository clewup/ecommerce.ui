import "./add-product-form.scss";
import { Form, Formik } from "formik";
import useProduct from "../../../hooks/useProduct";
import { IStock } from "../../../types/IProduct";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import Subheading from "../../atoms/Subheading/Subheading";

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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => createProduct(values)}
    >
      {(formik) => {
        return (
          <div id={"add-product-form"}>
            <Form>
              <Subheading>Add Product</Subheading>
              <Input
                label={"Name"}
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              <Input
                label={"Description"}
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <Input
                label={"Category"}
                value={formik.values.category}
                onChange={formik.handleChange}
              />
              <Input
                label={"Price"}
                value={formik.values.pricePerUnit}
                onChange={formik.handleChange}
              />
              <Input
                label={"Discount"}
                value={formik.values.discount}
                onChange={formik.handleChange}
              />
              <div className={"stock"}>
                <div className={"stock-display"}>
                  {stock.map((stock: IStock) => {
                    return (
                      <div key={stock.variant} className={"added-stock"}>
                        <p>{stock.variant}</p>
                        <p>{stock.count}</p>
                      </div>
                    );
                  })}
                </div>
                <div className={"add-stock"}>
                  <Input
                    label={"Variant"}
                    value={variant}
                    onChange={(e) => setVariant(e.target.value)}
                  />
                  <Input
                    label={"Count"}
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                  />
                  <Button
                    type={"button"}
                    variant={"contained"}
                    onClick={addStock}
                  >
                    Add Stock
                  </Button>
                </div>
              </div>

              <Button
                type={"submit"}
                variant={"contained"}
                color={"success"}
                disabled={stock.length === 0}
              >
                Add Product
              </Button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
export default AddProductForm;
