import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";
import { IImage } from "../types/IImage";

const PostImage = (image: IImage) => {
  return axios.post(`${apiUrls.ECOMMERCE}${apiEndpoints.IMAGE_UPLOAD}`, image);
};
export default PostImage;
