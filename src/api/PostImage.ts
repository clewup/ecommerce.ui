import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const PostImage = (image: File) => {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("name", image.name);

  return axios.post(
    `${apiUrls.ECOMMERCE}${apiEndpoints.IMAGE_UPLOAD}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
};
export default PostImage;
