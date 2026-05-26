import React, { TextareaHTMLAttributes } from "react";
import { useController, Control, FieldValues } from "react-hook-form";

interface TextareaProps<TFieldValues extends FieldValues = FieldValues> extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  control?: Control<TFieldValues>;
}

const Textarea = <TFieldValues extends FieldValues = FieldValues>({
  name = "",
  control,
  ...props
}: TextareaProps<TFieldValues>) => {
  const { field } = useController({
    control,
    name: name as never,
    defaultValue: "" as never,
  });
  return <textarea id={name} {...field} {...props}></textarea>;
};

export default Textarea;
