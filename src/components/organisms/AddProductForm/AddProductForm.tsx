import "./add-product-form.scss";
import { Field, Form, Formik, FormikProps } from "formik";
import useAddProduct from "../../../hooks/useAddProduct";
import { IProduct } from "../../../types/IProduct";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import React, { useRef, useState } from "react";

const AddProductForm = () => {
  const [product, setProduct] = useState<IProduct>();
  const formRef = useRef<FormikProps<IProduct> | null>(null);

  const { initialValues, uploadImage, formatProduct } = useAddProduct(product);

  const handleSubmit = (values: IProduct) => {
    setProduct(formatProduct(values));
    formRef.current?.resetForm({ values: formRef.current?.initialValues });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => handleSubmit(values)}
      innerRef={formRef}
    >
      {(formik: FormikProps<IProduct>) => {
        return (
          <div id={"add-product-form"}>
            <Form>
              <Subheading size={subheadingSize.MEDIUM}>Add Product</Subheading>
              <Button variant="contained" component="label">
                Upload File
                <input
                  type="file"
                  hidden
                  accept={"image/*"}
                  onChange={(e) => e.target.files && uploadImage(e)}
                />
              </Button>
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
                name={"stockCount"}
                component={Input}
                label={"Stock Count"}
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
              <Button
                type={"submit"}
                variant={"contained"}
                color={"success"}
                disabled={formik.isSubmitting}
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
