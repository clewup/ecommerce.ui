import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { ICheckoutFormValues, IOrder } from "../types/IOrder";
import postOrder from "../api/PostOrder";
import { AxiosError } from "axios";
import { CartContext } from "../contexts/Cart";
import { ICart } from "../types/ICart";
import { createGuid } from "../utils/createGuid";

interface IUseCheckoutProps {
  submitCheckout: (values: ICheckoutFormValues) => void;
  order: IOrder;
  isLoading: boolean;
  error: AxiosError | null;
}

const useCheckout = (): IUseCheckoutProps => {
  const { user } = useContext(UserContext);
  const { cart, setCart } = useContext(CartContext);
  const [order, setOrder] = useState<IOrder>({} as IOrder);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

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
      products: cart.products,
      total: 1,
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
    submitCheckout,
    order,
    isLoading,
    error,
  };
};
export default useCheckout;
