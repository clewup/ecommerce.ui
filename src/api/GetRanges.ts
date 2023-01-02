import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetRanges = () => {
  return axios.get(`${apiUrls.ECOMMERCE}${apiEndpoints.RANGES}`);
};
export default GetRanges;
