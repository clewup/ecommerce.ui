import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IRegister } from "../interfaces/IRegister";

const PostRegister = (register: IRegister) => {
  return axios.post(`${apiUrls.AUTH}${apiEndpoints.USER}`, register);
};
export default PostRegister;
