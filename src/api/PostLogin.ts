import { ILogin } from "../interfaces/ILogin";
import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const PostLogin = (login: ILogin) => {
  return axios.post(`${apiUrls.AUTH}${apiEndpoints.LOGIN}`, login);
};
export default PostLogin;
