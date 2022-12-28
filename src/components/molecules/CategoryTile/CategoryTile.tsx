import "./category-tile.scss";
import Subheading from "../../atoms/Subheading/Subheading";
import { useNavigate } from "react-router-dom";
import { subheadingSize } from "../../../enums/typography";
import React, { useContext } from "react";
import { ProductContext } from "../../../contexts/Product";

interface IProps {
  category: string;
}

const CategoryTile: React.FC<IProps> = ({ category }) => {
  const navigate = useNavigate();
  const { setCategoryQuery } = useContext(ProductContext);

  return (
    <div
      id={"category-tile"}
      onClick={() => {
        navigate("store");
        setCategoryQuery(category);
      }}
    >
      <Subheading size={subheadingSize.SMALL}>
        {category.toUpperCase()}
      </Subheading>
    </div>
  );
};
export default CategoryTile;
