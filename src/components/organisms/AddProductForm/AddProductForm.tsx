import "./add-product-form.scss";
import { Field, Form, Formik, FormikProps } from "formik";
import useAddProduct from "../../../hooks/useAddProduct";
import { IProduct } from "../../../types/IProduct";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import React, { useRef, useState } from "react";
import useImageUpload from "../../../hooks/useImageUpload";
import ErrorMessage from "../../molecules/ErrorMessage/ErrorMessage";

const AddProductForm = () => {
  const [product, setProduct] = useState<IProduct>();
  const formRef = useRef<FormikProps<IProduct> | null>(null);

  const { initialValues, formatProduct } = useAddProduct(product);
  const { images, isLoading, error, uploadImages } = useImageUpload();

  const handleSubmit = (values: IProduct) => {
    setProduct(formatProduct(values));
    formRef.current?.resetForm({ values: formRef.current?.initialValues });
  };

  if (error) return <ErrorMessage error={error} />;

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
              <div className={"product-images"}>
                {images.map((image) => {
                  return <img src={image.url} alt={image.id} />;
                })}
              </div>

              <Button
                variant="contained"
                component="label"
                disabled={isLoading}
              >
                Upload File
                <input
                  type="file"
                  hidden
                  accept={"image/*"}
                  multiple
                  onChange={(e) =>
                    e.target.files && uploadImages(e.target.files)
                  }
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
