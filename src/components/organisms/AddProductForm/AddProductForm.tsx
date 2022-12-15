import "./add-product-form.scss";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { IProduct } from "../../../types/IProduct";
import Input from "../../atoms/Input/Input";
import { Button, Snackbar } from "@mui/material";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import React, { useRef } from "react";
import useImageUpload from "../../../hooks/useImageUpload";
import AppError from "../../molecules/AppError/AppError";
import useProduct from "../../../hooks/useProduct";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const AddProductForm = () => {
  const formRef = useRef<FormikProps<IProduct> | null>(null);
  const [openAlert, setOpenAlert] = React.useState(false);

  const {
    initialValues,
    validationSchema,
    isLoading: productLoading,
    error: productError,
    addProduct,
  } = useProduct();
  const {
    images,
    isLoading: imagesLoading,
    error: imagesError,
    uploadImages,
  } = useImageUpload();

  console.log(images);

  const handleSubmit = (values: IProduct) => {
    addProduct(values, images);
    setOpenAlert(true);
    formRef.current?.resetForm({ values: initialValues });
  };

  if (productError || imagesError)
    return <AppError error={productError || imagesError!} />;

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      enableReinitialize={true}
      onSubmit={(values) => handleSubmit(values)}
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
                Upload Images
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
              <ErrorMessage name={"name"} />

              <Field
                name={"description"}
                component={Input}
                label={"Description"}
                onChange={formik.handleChange}
              />
              <ErrorMessage name={"description"} />

              <Field
                name={"category"}
                component={Input}
                label={"Category"}
                onChange={formik.handleChange}
              />
              <ErrorMessage name={"category"} />

              <Field
                name={"color"}
                component={Input}
                label={"Color"}
                onChange={formik.handleChange}
              />
              <ErrorMessage name={"color"} />

              <Field
                name={"stock"}
                component={Input}
                label={"Stock"}
                onChange={formik.handleChange}
              />
              <ErrorMessage name={"stock"} />

              <Field
                name={"price"}
                component={Input}
                label={"Price"}
                onChange={formik.handleChange}
              />
              <ErrorMessage name={"price"} />

              <Field
                name={"discount"}
                component={Input}
                label={"Discount"}
                onChange={formik.handleChange}
              />
              <ErrorMessage name={"discount"} />

              <Button
                type={"submit"}
                variant={"contained"}
                color={"success"}
                disabled={formik.isSubmitting || productLoading}
              >
                Add Product
              </Button>
            </Form>
            <Snackbar
              open={openAlert}
              autoHideDuration={6000}
              onClose={() => setOpenAlert(false)}
            >
              <Alert
                onClose={() => setOpenAlert(false)}
                severity="success"
                sx={{ width: "100%" }}
              >
                Product successfully added.
              </Alert>
            </Snackbar>
          </div>
        );
      }}
    </Formik>
  );
};
export default AddProductForm;
