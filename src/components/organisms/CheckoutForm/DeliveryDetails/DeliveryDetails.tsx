import Subheading, {
  subheadingSize,
} from "../../../atoms/Subheading/Subheading";
import "./delivery-details.scss";
import { ErrorMessage, Field, FormikProps } from "formik";
import Input from "../../../atoms/Input/Input";
import React from "react";
import { Button } from "@mui/material";
import { ICheckoutFormValues } from "../../../../types/IOrder";

interface IProps {
  formik: FormikProps<ICheckoutFormValues>;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}

const DeliveryDetails: React.FC<IProps> = ({ formik, setTabIndex }) => {
  return (
    <div id={"delivery-details"}>
      <Subheading size={subheadingSize.SMALL}>Delivery Details</Subheading>
      <Field
        name={"firstName"}
        component={Input}
        label={"First Name"}
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <ErrorMessage name={"firstName"} />

      <Field
        name={"lastName"}
        component={Input}
        label={"Last Name"}
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <ErrorMessage name={"lastName"} />

      <Field
        name={"email"}
        component={Input}
        label={"Email"}
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <ErrorMessage name={"email"} />

      <Field
        name={"lineOne"}
        component={Input}
        label={"Line One"}
        onChange={formik.handleChange}
        value={formik.values.lineOne}
      />
      <ErrorMessage name={"lineOne"} />

      <Field
        name={"lineTwo"}
        component={Input}
        label={"Line Two"}
        onChange={formik.handleChange}
        value={formik.values.lineTwo}
      />
      <ErrorMessage name={"lineTwo"} />

      <Field
        name={"lineThree"}
        component={Input}
        label={"Line Three"}
        onChange={formik.handleChange}
        value={formik.values.lineThree}
      />
      <ErrorMessage name={"lineThree"} />

      <Field
        name={"postcode"}
        component={Input}
        label={"Postcode"}
        onChange={formik.handleChange}
        value={formik.values.postcode}
      />
      <ErrorMessage name={"postcode"} />

      <Field
        name={"city"}
        component={Input}
        label={"City"}
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      <ErrorMessage name={"city"} />

      <Field
        name={"county"}
        component={Input}
        label={"County"}
        onChange={formik.handleChange}
        value={formik.values.county}
      />
      <ErrorMessage name={"county"} />

      <Field
        name={"country"}
        component={Input}
        label={"Country"}
        onChange={formik.handleChange}
        value={formik.values.country}
      />
      <ErrorMessage name={"country"} />

      <div className={"checkout-action-buttons"}>
        <Button
          size={"large"}
          type={"button"}
          variant={"contained"}
          color={"success"}
          onClick={() => setTabIndex(1)}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
};
export default DeliveryDetails;
