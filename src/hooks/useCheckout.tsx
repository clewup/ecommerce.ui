import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { ICheckoutFormValues, IOrder } from "../types/IOrder";
import postOrder from "../api/PostOrder";
import { AxiosError } from "axios";
import { CartContext } from "../contexts/Cart";
import * as Yup from "yup";
import { createGuid } from "../utils/CreateGuid";
import { ICart } from "../types/ICart";

interface IUseCheckoutProps {
  initialValues: ICheckoutFormValues;
  submitCheckout: (values: ICheckoutFormValues) => void;
  order: IOrder;
  isLoading: boolean;
  error: AxiosError | null;
  validationSchema: Yup.ObjectSchema<any>;
}

const useCheckout = (): IUseCheckoutProps => {
  const { user } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const [order, setOrder] = useState<IOrder>({} as IOrder);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const initialValues: ICheckoutFormValues = {
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    lineOne: user?.lineOne || "",
    lineTwo: user?.lineTwo || "",
    lineThree: user?.lineThree || "",
    postcode: user?.postcode || "",
    city: user?.city || "",
    county: user?.county || "",
    country: user?.country || "",
    cardNumber: "1234-5678-9101-1121",
    expiryMonth: "12",
    expiryYear: "34",
    cvc: "567",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Must be a valid email").required("Required"),
    lineOne: Yup.string().required("Required"),
    lineTwo: Yup.string(),
    lineThree: Yup.string(),
    postcode: Yup.string()
      .matches(
        /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i,
        "Must be a valid postcode"
      )
      .required("Required"),
    city: Yup.string().required("Required"),
    county: Yup.string(),
    country: Yup.string().required("Required"),
  });

  const submitCheckout = (values: ICheckoutFormValues) => {
    const order: IOrder = {
      id: createGuid(),
      userId: user?.id!,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      deliveryAddress: {
        lineOne: values.lineOne,
        lineTwo: values.lineTwo,
        lineThree: values.lineThree,
        postcode: values.postcode,
        city: values.city,
        county: values.county,
        country: values.country,
      },
      cart: cart!,
      orderDate: new Date(),
    };

    setLoading(true);
    postOrder(order)
      .then((res) => {
        setOrder(res.data);
        setCart({} as ICart);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    initialValues,
    validationSchema,
    submitCheckout,
    order,
    isLoading,
    error,
  };
};
export default useCheckout;
