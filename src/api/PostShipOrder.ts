import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IOrder } from "../interfaces/IOrder";

const PostShipOrder = (order: IOrder) => {
  return axios.post(`${apiUrls.ECOMMERCE}${apiEndpoints.SHIP_ORDER}`, order);
};
export default PostShipOrder;
