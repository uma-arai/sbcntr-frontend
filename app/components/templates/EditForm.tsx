import React from "react";
import { AuthenticationError, Link, useMutation } from "blitz";
import { LabeledTextField } from "app/components/LabeledTextField";
import { Form, FORM_ERROR } from "app/components/Form";
import login from "app/auth/mutations/login";
import { LoginInput } from "app/auth/validations";
import { TextField } from "@material-ui/core";

type EditFormProps = {
  onSuccess?: () => void;
};

export const EditForm = (props: EditFormProps) => {
  const [loginMutation] = useMutation(login);

  return (
    <div>
      <h1>ユーザ情報変更</h1>

      <Form
        submitText="Login"
        schema={LoginInput}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await loginMutation(values);
            props.onSuccess?.();
          } catch (error) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: "Sorry, those credentials are invalid" };
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " +
                  error.toString(),
              };
            }
          }
        }}
      >
        <LabeledTextField name="email" label="test" placeholder="Email" />
        <LabeledTextField
          name="password"
          label="gege"
          placeholder="Password"
          type="password"
        />
      </Form>
    </div>
  );
};

export default EditForm;
