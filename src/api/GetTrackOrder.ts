import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { Guid } from "guid-typescript";

const GetTrackOrder = (trackingNumber: Guid) => {
  return axios.get(
    `${apiUrls.ECOMMERCE}${apiEndpoints.TRACK_ORDER(trackingNumber)}`
  );
};
export default GetTrackOrder;
