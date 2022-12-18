import React, { ForwardedRef } from "react";
import "./text.scss";
import classnames from "classnames";

interface IProps {
  children: any;
  size?: string;
  className?: string;
  onClick?: () => void;
  id?: string;
  onMouseEnter?: () => void;
  ref?: ForwardedRef<any>;
}

export const textSize = {
  SMALL: "text-small",
  LARGE: "text-large",
};

const Text: React.FC<IProps> = React.forwardRef(
  ({ children, size, className, onClick, id, onMouseEnter }, ref) => (
    <p
      className={classnames("text", size, className)}
      onClick={onClick}
      ref={ref}
      id={id}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </p>
  )
);
export default Text;
