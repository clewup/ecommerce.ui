import React, { ForwardedRef } from "react";
import "./heading.scss";
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

const Heading: React.FC<IProps> = React.forwardRef(
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
      className={classnames("heading", className)}
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

export default Heading;
