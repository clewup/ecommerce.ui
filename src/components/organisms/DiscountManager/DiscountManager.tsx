import DiscountForm from "../DiscountForm/DiscountForm";
import Subheading from "../../atoms/Subheading/Subheading";
import "./discount-manager.scss";
import useDiscount from "../../../hooks/useDiscount";
import { useEffect } from "react";
import Text from "../../atoms/Text/Text";
import Loader from "../../atoms/Loader/Loader";

const DiscountManager = () => {
  const { discounts, isLoading, getDiscounts } = useDiscount();

  useEffect(() => {
    getDiscounts();
  }, []);

  return (
    <div id={"discount-manager"}>
      <div className={"all-discounts"}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Subheading>All Discounts</Subheading>
            {discounts?.map((discount) => {
              return (
                <div key={String(discount.id)} className={"discount-tile"}>
                  <Text>{discount.name}</Text>
                  <Text>{discount.percentage}%</Text>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div>
        <DiscountForm />
      </div>
    </div>
  );
};
export default DiscountManager;
