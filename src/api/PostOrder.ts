import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IRegister } from "../types/IRegister";
import { IOrder } from "../types/IOrder";

const PostOrder = (order: IOrder) => {
  return axios.post(`${apiUrls.ECOMMERCE}${apiEndpoints.ORDER}`, order);
};
export default PostOrder;
