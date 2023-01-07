import { Guid } from "guid-typescript";
import { IOrder } from "../interfaces/IOrder";
import { IPackage } from "../interfaces/IPackage";
import { useEffect, useState } from "react";
import getTrackOrder from "../api/GetTrackOrder";
import { AxiosError } from "axios";
import postShipOrder from "../api/PostShipOrder";
import putExtendOrderArrival from "../api/PutExtendOrderArrival";

interface IUseShipping {
  trackedOrder: IPackage | undefined;
  isShipped: boolean;
  isExtended: boolean;
  isLoading: boolean;
  error: AxiosError | null;
  trackOrder: (trackingNumber: Guid) => void;
  shipOrder: (order: IOrder) => void;
  extendArrival: (trackingNumber: Guid, days: number) => void;
}

const useShipping = (): IUseShipping => {
  const [trackedOrder, setTrackedOrder] = useState<IPackage>();
  const [isShipped, setShipped] = useState(false);
  const [isExtended, setExtended] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const trackOrder = (trackingNumber: Guid) => {
    setLoading(true);
    getTrackOrder(trackingNumber)
      .then((res) => setTrackedOrder(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const shipOrder = (order: IOrder) => {
    setLoading(true);
    postShipOrder(order)
      .then((res) => {
        res.status === 200 && setShipped(true);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  const extendArrival = (trackingNumber: Guid, days: number) => {
    setLoading(true);
    putExtendOrderArrival(trackingNumber, days)
      .then((res) => {
        res.status === 200 && setExtended(true);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return {
    trackedOrder,
    isShipped,
    isExtended,
    isLoading,
    error,
    trackOrder,
    shipOrder,
    extendArrival,
  };
};
export default useShipping;
