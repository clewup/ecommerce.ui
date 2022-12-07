import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IUser } from "../types/IUser";

const PutUser = (user: IUser) => {
  return axios.put(`${apiUrls.AUTH}${apiEndpoints.USER}`, user);
};
export default PutUser;
