import React, { LabelHTMLAttributes } from "react";

const Label = ({
  htmlFor = "",
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label className="form__label--name" htmlFor={htmlFor} {...props}>
      {children}
    </label>
  );
};

export default Label;
