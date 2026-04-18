import React, { InputHTMLAttributes } from "react";
import { useController } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  control?: any;
}

const Input = ({ name = "", type = "text", control, ...props }: InputProps) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return <input id={name} type={type} {...field} {...props} />;
};

export default Input;
