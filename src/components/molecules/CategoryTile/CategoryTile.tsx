import "./category-tile.scss";
import Subheading, { subheadingSize } from "../../atoms/Subheading/Subheading";
import { useNavigate } from "react-router-dom";

interface IProps {
  category: string;
}

const CategoryTile: React.FC<IProps> = ({ category }) => {
  const navigate = useNavigate();

  return (
    <div
      id={"category-tile"}
      onClick={() =>
        navigate(`store/${category.replace(/\s/g, "-").toLowerCase()}`)
      }
    >
      <Subheading size={subheadingSize.XSMALL}>{category}</Subheading>
    </div>
  );
};
export default CategoryTile;
