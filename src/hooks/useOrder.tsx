import { useState } from "react";
import { IOrder } from "../types/IOrder";
import { AxiosError } from "axios";
import getOrdersByUserId from "../api/GetOrdersByUserId";
import { Guid } from "guid-typescript";

interface IUseOrderProps {
  orders: IOrder[];
  isLoading: boolean;
  error: AxiosError | null;
  getUserOrders: (userId: Guid) => void;
}

const useOrder = (): IUseOrderProps => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const getUserOrders = (userId: Guid) => {
    setLoading(true);
    getOrdersByUserId(userId)
      .then((res) => setOrders(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };
  return { orders, isLoading, error, getUserOrders };
};
export default useOrder;
