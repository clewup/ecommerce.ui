import { AxiosError } from "axios";
import { Guid } from "guid-typescript";
import { IDiscount } from "../interfaces/IDiscount";
import { useState } from "react";
import GetDiscounts from "../api/GetDiscounts";
import GetDiscountById from "../api/GetDiscountById";
import PostDiscount from "../api/PostDiscount";
import PutDiscount from "../api/PutDiscount";
import DeleteDiscount from "../api/DeleteDiscount";

interface IUseDiscount {
  discounts: IDiscount[] | undefined;
  discount: IDiscount | undefined;
  isLoading: boolean;
  error: AxiosError | null;
  getDiscounts: () => void;
  getDiscount: (id: Guid) => void;
  createDiscount: (discount: IDiscount) => void;
  updateDiscount: (discount: IDiscount) => void;
  deleteDiscount: (id: Guid) => void;
}

const useDiscount = (): IUseDiscount => {
  const [discounts, setDiscounts] = useState<IDiscount[]>();
  const [discount, setDiscount] = useState<IDiscount>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const getDiscounts = () => {
    setLoading(true);
    GetDiscounts()
      .then((res) => setDiscounts(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const getDiscount = (id: Guid) => {
    setLoading(true);
    GetDiscountById(id)
      .then((res) => setDiscount(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const createDiscount = (discount: IDiscount) => {
    setLoading(true);
    PostDiscount(discount)
      .then((res) => setDiscount(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const updateDiscount = (discount: IDiscount) => {
    setLoading(true);
    PutDiscount(discount)
      .then((res) => setDiscount(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const deleteDiscount = (id: Guid) => {
    setLoading(true);
    DeleteDiscount(id)
      .then((res) => setDiscount(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    discounts,
    discount,
    isLoading,
    error,
    getDiscounts,
    getDiscount,
    createDiscount,
    updateDiscount,
    deleteDiscount,
  };
};
export default useDiscount;
