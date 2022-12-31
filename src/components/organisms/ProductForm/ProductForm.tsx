import "./product-form.scss";
import { Field, Form, Formik, FormikHelpers, FormikProps } from "formik";
import { IProduct } from "../../../types/IProduct";
import Input from "../../atoms/Input/Input";
import { Button, Snackbar } from "@mui/material";
import React, { useContext, useEffect } from "react";
import useImageUpload from "../../../hooks/useImageUpload";
import AppError from "../../molecules/AppError/AppError";
import useProduct from "../../../hooks/useProduct";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Carousel from "react-material-ui-carousel";
import { ProductContext } from "../../../contexts/Product";
import TextArea from "../../atoms/TextArea/TextArea";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { colors } from "../../../styles/colors";
import { formatSelectOptions } from "../../../utils/formatSelectOptions";
import CreatableSelect from "react-select/creatable";
import classnames from "classnames";

const ProductForm = () => {
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
    clearImages,
    isLoading: imagesLoading,
    error: imagesError,
    uploadImages,
  } = useImageUpload();

  const { categories, ranges } = useContext(ProductContext);

  useEffect(() => {
    clearImages();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (values: IProduct, actions: FormikHelpers<IProduct>) => {
    addProduct(values, images);
    clearImages();
    setOpenAlert(true);
    actions.resetForm({ values: initialValues });
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
      onSubmit={(values, actions) => handleSubmit(values, actions)}
    >
      {(formik: FormikProps<IProduct>) => {
        if (formik.touched.category && formik.errors.category) {
          const element = document.querySelectorAll(
            " div[class*='control']"
          )[0];
          element?.classList.add("form-error");
        }

        if (formik.touched.range && formik.errors.range) {
          const element = document.querySelectorAll(
            " div[class*='control']"
          )[1];
          element?.classList.add("form-error");
        }

        return (
          <div id={"product-form"}>
            <Form>
              <div className={"product-form-fields"}>
                <div className={"product-form-third"}>
                  <Carousel
                    animation={"slide"}
                    swipe={false}
                    indicators={false}
                    autoPlay={false}
                    height={"310px"}
                    sx={{
                      backgroundColor: colors.WHITE,
                    }}
                    className={classnames("carousel", {
                      "form-error": formik.errors.images,
                    })}
                  >
                    {images.map((image) => {
                      return <img src={image} alt={image} key={image} />;
                    })}
                  </Carousel>

                  <Button
                    variant="contained"
                    component="label"
                    disabled={imagesLoading}
                    className={"upload-button"}
                  >
                    Upload Images
                    <CameraAltIcon />
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
                </div>

                <div className={"product-form-third"}>
                  <Field
                    name={"name"}
                    component={Input}
                    label={"Name"}
                    onChange={formik.handleChange}
                  />

                  <Field
                    name={"description"}
                    component={TextArea}
                    rows={11.7}
                    label={"Description"}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className={"product-form-third"}>
                  <CreatableSelect
                    isClearable
                    options={formatSelectOptions({ options: categories })}
                    onChange={(category) =>
                      formik.setFieldValue("category", category?.value)
                    }
                    placeholder={"Category"}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        height: "55px",
                        margin: "0.2rem 0",
                      }),
                    }}
                  />

                  <CreatableSelect
                    isClearable
                    options={formatSelectOptions({ options: ranges })}
                    onChange={(range) =>
                      formik.setFieldValue("range", range?.value)
                    }
                    placeholder={"Range"}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        height: "55px",
                        margin: "0.2rem 0",
                      }),
                    }}
                  />

                  <Field
                    name={"color"}
                    component={Input}
                    label={"Color"}
                    onChange={formik.handleChange}
                  />

                  <Field
                    name={"stock"}
                    component={Input}
                    label={"Stock"}
                    onChange={formik.handleChange}
                  />

                  <Field
                    name={"price"}
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
                </div>
              </div>
              <div className={"product-form-action-buttons"}>
                <Button
                  type={"submit"}
                  variant={"contained"}
                  color={"success"}
                  disabled={
                    formik.isSubmitting || productLoading || !formik.isValid
                  }
                  size={"large"}
                >
                  Add Product
                </Button>
              </div>
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
export default ProductForm;
