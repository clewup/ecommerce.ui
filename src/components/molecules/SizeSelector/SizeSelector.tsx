import { ISize } from "../../../types/IProduct";
import React, { SetStateAction } from "react";
import "./size-selector.scss";
import classnames from "classnames";

interface IProps {
  sizes: ISize[];
  selectedSize: ISize | undefined;
  setSelectedSize: React.Dispatch<SetStateAction<ISize | undefined>>;
}

const SizeSelector: React.FC<IProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
}) => {
  return (
    <div id={"size-selector"}>
      {sizes.map((size) => {
        const abbreviatedSize = size.size.replace(/[a-z]/g, "");
        return (
          <div
            className={classnames(
              "size",
              {
                "selected-size":
                  selectedSize && selectedSize.size === size.size,
              },
              { "out-of-stock-size": size.stock === 0 }
            )}
            key={size.size}
            onClick={() => size.stock > 0 && setSelectedSize(size)}
          >
            {abbreviatedSize}
          </div>
        );
      })}
    </div>
  );
};
export default SizeSelector;
