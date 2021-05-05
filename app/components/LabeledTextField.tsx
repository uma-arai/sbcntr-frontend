import React, { PropsWithoutRef } from "react";
import { useField } from "react-final-form";

export interface LabeledTextFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  /** Field name. */
  name: string;

  /** Field label. */
  label: string;

  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number";
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>;
}

export const LabeledTextField = React.forwardRef<
  HTMLInputElement,
  LabeledTextFieldProps
>(({ name, label, outerProps, ...props }, ref) => {
  const {
    input,
    meta: { touched, error, submitError, submitting },
  } = useField(name);

  const normalizedError = Array.isArray(error)
    ? error.join(", ")
    : error || submitError;

  return (
    <div {...outerProps}>
      <label>
        {label}
        <input {...input} disabled={submitting} {...props} ref={ref} />
      </label>

      {touched && normalizedError && (
        <div role="alert" style={{ color: "red" }}>
          {normalizedError}
        </div>
      )}
    </div>
  );
});

export default LabeledTextField;
