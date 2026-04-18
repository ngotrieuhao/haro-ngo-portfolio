import React, { ButtonHTMLAttributes } from "react";
import LoadingSpinner from "../LoadingSpinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button = ({
  type = "button",
  onClick = () => {},
  children,
  isLoading,
  className,
  ...props
}: ButtonProps) => {
  //   const { isLoading } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <button
      className={`${className} select-none`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {child}
    </button>
  );
};

export default Button;
