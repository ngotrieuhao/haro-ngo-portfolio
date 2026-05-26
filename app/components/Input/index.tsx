import React, { InputHTMLAttributes } from "react";
import { useController, Control, FieldValues } from "react-hook-form";

interface InputProps<TFieldValues extends FieldValues = FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  control?: Control<TFieldValues>;
}

const Input = <TFieldValues extends FieldValues = FieldValues>({
  name = "",
  type = "text",
  control,
  ...props
}: InputProps<TFieldValues>) => {
  const { field } = useController({
    control,
    name: name as never,
    defaultValue: "" as never,
  });
  return <input id={name} type={type} {...field} {...props} />;
};

export default Input;
