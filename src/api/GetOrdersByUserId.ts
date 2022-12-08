import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { Guid } from "guid-typescript";

const GetOrdersByUserId = (userId: Guid) => {
  return axios.get(
    `${apiUrls.ECOMMERCE}${apiEndpoints.ORDER_BY_USER_ID(userId)}`
  );
};
export default GetOrdersByUserId;
