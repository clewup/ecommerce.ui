import { Field, Form, Formik } from "formik";
import { IUser } from "../../../interfaces/IUser";
import React, { useState } from "react";
import "./user-form.scss";
import Text from "../../atoms/Text/Text";
import Input from "../../atoms/Input/Input";
import { Button } from "@mui/material";
import { userValidationSchema } from "./utils/schema";
import AppError from "../../molecules/AppError/AppError";

interface IProps {
  user: IUser | undefined;
  updateUser: (user: IUser) => void;
}

const UserForm: React.FC<IProps> = ({ user, updateUser }) => {
  const [isEditing, setEditing] = useState(false);

  if (!user)
    return (
      <AppError
        error={{
          code: "UNAUTHORIZED",
          message: "You do not have permission to view this page.",
        }}
      />
    );

  return (
    <Formik
      initialValues={user}
      validationSchema={userValidationSchema}
      onSubmit={(values) => {
        updateUser(values);
      }}
    >
      {(formik) => {
        return (
          <Form>
            <div id={"user-form"}>
              <div className={"user-avatar"}>
                <img
                  src={
                    "https://durantarms.co.uk/wp-content/plugins/divi-pixel/includes/modules/Testimonial/avatar.png"
                  }
                  alt={String(user.id)}
                />
              </div>
              <div className={"contact-info"}>
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
              <div className={"user-footer"}>
                <Button
                  variant={"contained"}
                  color={"_black"}
                  size={"large"}
                  onClick={() => {
                    if (isEditing) {
                      formik.resetForm({ values: formik.initialValues });
                      setEditing(false);
                    } else {
                      setEditing(true);
                    }
                  }}
                >
                  Edit
                </Button>
                <Button
                  type={"submit"}
                  variant={"contained"}
                  color={"success"}
                  size={"large"}
                  disabled={!isEditing || !formik.dirty}
                >
                  Save
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default UserForm;
