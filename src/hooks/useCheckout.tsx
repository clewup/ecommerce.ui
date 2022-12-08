import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { ICheckoutFormValues, IOrder } from "../types/IOrder";
import postOrder from "../api/PostOrder";
import { AxiosError } from "axios";
import { CartContext } from "../contexts/Cart";

interface ICheckoutProps {
  initialValues: ICheckoutFormValues;
  submitCheckout: (values: ICheckoutFormValues) => void;
  order: IOrder | null;
  isLoading: boolean;
  error: AxiosError | null;
}

const useCheckout = (): ICheckoutProps => {
  const { user } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [order, setOrder] = useState<IOrder | null>(null);
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

  const submitCheckout = (values: ICheckoutFormValues) => {
    const order: IOrder = {
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
      .then((res) => setOrder(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { initialValues, submitCheckout, order, isLoading, error };
};
export default useCheckout;
