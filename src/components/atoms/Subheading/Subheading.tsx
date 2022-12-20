import React, { ForwardedRef } from "react";
import "./subheading.scss";
import classnames from "classnames";
import CSS from "csstype";

interface IProps {
  children: any;
  onClick?: () => void;
  id?: string;
  className?: string;
  onMouseEnter?: () => void;
  ref?: ForwardedRef<any>;
  color?: string;
  size?: string;
  align?: CSS.Property.TextAlign;
  padding?: string;
  margin?: string;
}

const Subheading: React.FC<IProps> = React.forwardRef(
  (
    {
      children,
      onClick,
      id,
      className,
      onMouseEnter,
      color,
      size,
      align,
      padding,
      margin,
    },
    ref
  ) => (
    <h3
      className={classnames("subheading", className)}
      onClick={onClick}
      ref={ref}
      id={id}
      onMouseEnter={onMouseEnter}
      style={{
        color: color,
        fontSize: size,
        textAlign: align,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </h3>
  )
);
export default Subheading;
