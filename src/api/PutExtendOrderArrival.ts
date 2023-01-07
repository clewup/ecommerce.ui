import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { Guid } from "guid-typescript";

const PutExtendOrderArrival = (trackingNumber: Guid, days: number) => {
  return axios.put(
    `${apiUrls.ECOMMERCE}${apiEndpoints.EXTEND_ORDER_ARRIVAL(
      trackingNumber,
      days
    )}`
  );
};
export default PutExtendOrderArrival;
