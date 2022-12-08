import "./add-product-form.scss";
import { Field, Form, Formik, FormikProps } from "formik";
import useAddProduct from "../../../hooks/useAddProduct";
import { IProduct } from "../../../types/IProduct";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import React, { useRef } from "react";
import useImageUpload from "../../../hooks/useImageUpload";
import ErrorMessage from "../../molecules/ErrorMessage/ErrorMessage";

const AddProductForm = () => {
  const formRef = useRef<FormikProps<IProduct> | null>(null);

  const {
    initialValues,
    isLoading: productLoading,
    error: productError,
    addProduct,
  } = useAddProduct();
  const {
    images,
    isLoading: imagesLoading,
    error: imagesError,
    uploadImages,
  } = useImageUpload();

  const handleSubmit = (values: IProduct) => {
    addProduct(values, images);
    formRef.current?.resetForm({ values: formRef.current?.initialValues });
  };

  if (productError || imagesError)
    return <ErrorMessage error={productError || imagesError!} />;

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
                  return <img src={image.url} alt={image.url} />;
                })}
              </div>

              <Button
                variant="contained"
                component="label"
                disabled={imagesLoading}
              >
                Upload File
                <input
                  type="file"
                  hidden
                  accept={"image/*"}
                  multiple
                  onChange={(e) => {
                    e.target.files && uploadImages(e.target.files);
                  }}
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
                disabled={formik.isSubmitting || productLoading}
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
