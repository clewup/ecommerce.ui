import axios from "axios";
import { apiUrls } from "../enums/apiUrls";
import { apiEndpoints } from "../enums/apiEndpoints";

const GetSubcategoriesByCategory = (category: string) => {
  return axios.get(
    `${apiUrls.ECOMMERCE}${apiEndpoints.SUBCATEGORIES_BY_CATEGORY(category)}`
  );
};
export default GetSubcategoriesByCategory;
