import React, { TextareaHTMLAttributes } from "react";
import { useController } from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  control?: any;
}

const Textarea = ({ name = "", control, ...props }: TextareaProps) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return <textarea id={name} {...field} {...props}></textarea>;
};

export default Textarea;
