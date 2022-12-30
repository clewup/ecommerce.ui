import "./add-product-form.scss";
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
import CreatableSelect from "react-select/creatable";
import { ProductContext } from "../../../contexts/Product";
import TextArea from "../../atoms/TextArea/TextArea";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { colors } from "../../../styles/colors";

const AddProductForm = () => {
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

  const { categories } = useContext(ProductContext);

  useEffect(() => {
    clearImages();
    // eslint-disable-next-line
  }, []);

  interface ISelectOption {
    value: string;
    label: string;
  }

  const formatCategoryOptions = (categories: string[]) => {
    const formatted: ISelectOption[] = [];
    categories.forEach((category) => {
      formatted.push({
        label: category,
        value: category,
      });
    });
    return formatted;
  };

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
        return (
          <div id={"add-product-form"}>
            <Form>
              <div className={"product-form-fields"}>
                <div className={"product-form-half"}>
                  <Carousel
                    animation={"slide"}
                    swipe={false}
                    indicators={false}
                    autoPlay={false}
                    height={"310px"}
                    className={"carousel"}
                    sx={{
                      backgroundColor: colors.WHITE,
                    }}
                  >
                    {images.map((image) => {
                      return <img src={image.url} alt={image.url} />;
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

                  <Field
                    name={"name"}
                    component={Input}
                    label={"Name"}
                    onChange={formik.handleChange}
                  />

                  <CreatableSelect
                    isClearable
                    options={formatCategoryOptions(categories)}
                    onChange={(category) =>
                      formik.setFieldValue("category", category?.value)
                    }
                    placeholder={"Category"}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        height: "55px",
                        margin: "0.5rem 0",
                      }),
                    }}
                  />
                </div>

                <div className={"product-form-half"}>
                  <Field
                    name={"description"}
                    component={TextArea}
                    rows={9.3}
                    label={"Description"}
                    onChange={formik.handleChange}
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
                  disabled={formik.isSubmitting || productLoading}
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
export default AddProductForm;
