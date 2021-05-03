import React, { ReactNode, PropsWithoutRef } from "react";
import {
  Form as FinalForm,
  FormProps as FinalFormProps,
} from "react-final-form";
import * as z from "zod";
import Button from "@material-ui/core/Button";

export { FORM_ERROR } from "final-form";

type FormProps<S extends z.ZodType<any, any>> = {
  /** All your form fields */
  children: ReactNode;
  /** Text to display in the submit button */
  submitText: string;
  schema?: S;
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"];
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"];
} & Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit">;

export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  ...props
}: FormProps<S>) {
  return (
    <FinalForm
      initialValues={initialValues}
      validate={(values) => {
        if (!schema) return;
        try {
          schema.parse(values);
        } catch (error) {
          return error.formErrors.fieldErrors;
        }
      }}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <form onSubmit={handleSubmit} className="form" {...props}>
          {/* Form fields supplied as children are rendered here */}
          {children}

          {submitError && (
            <div role="alert" style={{ color: "red" }}>
              {submitError}
            </div>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={submitting}
          >
            {submitText}
          </Button>

          <style global jsx>{`
            .form > * + * {
              margin-top: 1rem;
            }
          `}</style>
        </form>
      )}
    />
  );
}

export default Form;
