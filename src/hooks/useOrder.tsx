import { useState } from "react";
import { IOrder } from "../interfaces/IOrder";
import { AxiosError } from "axios";
import GetUserOrders from "../api/GetUserOrders";
import { Guid } from "guid-typescript";
import GetAllOrders from "../api/GetAllOrders";

interface IUseOrder {
  orders: IOrder[];
  isLoading: boolean;
  error: AxiosError | null;
  getUserOrders: (userId: Guid) => void;
  getAllOrders: () => void;
}

const useOrder = (): IUseOrder => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const getUserOrders = () => {
    setLoading(true);
    GetUserOrders()
      .then((res) => setOrders(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
  const getAllOrders = () => {
    setLoading(true);
    GetAllOrders()
      .then((res) => setOrders(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { orders, isLoading, error, getUserOrders, getAllOrders };
};
export default useOrder;
