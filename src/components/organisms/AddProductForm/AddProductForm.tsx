import "./add-product-form.scss";
import { Field, Form, Formik } from "formik";
import useProduct from "../../../hooks/useProduct";
import { IProduct, IStock } from "../../../types/IProduct";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import Subheading from "../../atoms/Subheading/Subheading";
import React, { useState } from "react";

const AddProductForm = () => {
  const [product, setProduct] = useState<IProduct>();

  const {
    initialValues,
    variant,
    setVariant,
    count,
    setCount,
    stock,
    addStock,
    formatProduct,
  } = useProduct(product);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => setProduct(formatProduct(values))}
    >
      {(formik) => {
        return (
          <div id={"add-product-form"}>
            <Form>
              <Subheading>Add Product</Subheading>
              <Field
                name={"name"}
                component={Input}
                label={"Name"}
                onChange={formik.handleChange}
              />
              <Field
                name={"description"}
                component={Input}
                label={"Description"}
                onChange={formik.handleChange}
              />
              <Field
                name={"category"}
                component={Input}
                label={"Category"}
                onChange={formik.handleChange}
              />
              <Field
                name={"pricePerUnit"}
                component={Input}
                label={"Price"}
                onChange={formik.handleChange}
              />
              <Field
                name={"discount"}
                component={Input}
                label={"Discount"}
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
