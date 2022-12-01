interface ICheckoutProps {
  initialValues: object;
}

const useCheckout = (): ICheckoutProps => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    lineOne: "",
    lineTwo: "",
    lineThree: "",
    postcode: "",
    city: "",
    county: "",
    country: "",
    cardNumber: "1234-5678-9101-1121",
    expiryMonth: "12",
    expiryYear: "34",
    cvc: "567",
  };

  return { initialValues };
};
export default useCheckout;
