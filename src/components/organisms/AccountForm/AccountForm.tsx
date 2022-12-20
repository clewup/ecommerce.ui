import { Field, FormikProps } from "formik";
import { IUser } from "../../../types/IUser";
import React from "react";
import "./account-form.scss";
import Text from "../../atoms/Text/Text";

import Input from "../../atoms/Input/Input";
import Subheading from "../../atoms/Subheading/Subheading";
import { subheadingSize } from "../../../enums/typography";

interface IProps {
  formik: FormikProps<IUser>;
  user: IUser;
  isEditing: boolean;
}

const AccountForm: React.FC<IProps> = ({ formik, user, isEditing }) => {
  return (
    <div id={"account-form"}>
      <div className={"contact-info"}>
        <Subheading size={subheadingSize.SMALL} align={"center"}>
          Contact Info
        </Subheading>
        <Field
          name={"firstName"}
          component={Input}
          label={"First Name"}
          disabled={!isEditing}
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        <Field
          name={"lastName"}
          component={Input}
          label={"Last Name"}
          disabled={!isEditing}
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <Field
          name={"email"}
          component={Input}
          label={"Email"}
          disabled={!isEditing}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>

      {user.lineOne && !isEditing ? (
        <div className={"address-info"}>
          <Subheading size={subheadingSize.SMALL} align={"center"}>
            Address
          </Subheading>
          <div className={"existing-address"}>
            <Text>{user.lineOne}</Text>
            <Text>{user.lineTwo}</Text>
            <Text>{user.lineThree}</Text>
            <Text>{user.postcode}</Text>
            <Text>{user.city}</Text>
            <Text>{user.county}</Text>
            <Text>{user.country}</Text>
          </div>
        </div>
      ) : (
        <div className={"address-info"}>
          <Subheading size={subheadingSize.SMALL} align={"center"}>
            Address
          </Subheading>
          <Field
            name={"lineOne"}
            component={Input}
            label={"Line One"}
            disabled={!isEditing}
            onChange={formik.handleChange}
            value={formik.values.lineOne}
          />
          <Field
            name={"lineTwo"}
            component={Input}
            label={"Line Two"}
            disabled={!isEditing}
            onChange={formik.handleChange}
            value={formik.values.lineTwo}
          />
          <Field
            name={"lineThree"}
            component={Input}
            label={"Line Three"}
            disabled={!isEditing}
            onChange={formik.handleChange}
            value={formik.values.lineThree}
          />
          <Field
            name={"postcode"}
            component={Input}
            label={"Postcode"}
            disabled={!isEditing}
            onChange={formik.handleChange}
            value={formik.values.postcode}
          />
          <Field
            name={"city"}
            component={Input}
            label={"City"}
            disabled={!isEditing}
            onChange={formik.handleChange}
            value={formik.values.city}
          />
          <Field
            name={"county"}
            component={Input}
            label={"County"}
            disabled={!isEditing}
            onChange={formik.handleChange}
            value={formik.values.county}
          />
          <Field
            name={"country"}
            component={Input}
            label={"Country"}
            disabled={!isEditing}
            onChange={formik.handleChange}
            value={formik.values.country}
          />
        </div>
      )}
    </div>
  );
};
export default AccountForm;
