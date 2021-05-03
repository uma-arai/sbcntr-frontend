import React from "react";
import { useMutation, useRouter } from "blitz";
import { Form, FORM_ERROR } from "app/components/Form";
import signup from "app/auth/mutations/signup";
import { SignupInput } from "app/auth/validations";
import Typography from "@material-ui/core/Typography";
import { TextField } from "mui-rff";
import { useStyles } from "./LoginForm";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleOutlined from "@material-ui/icons/AccountCircleOutlined";
import { ERROR_MESSAGES } from "../../../utils/message";
import Button from "@material-ui/core/Button";

type SignupFormProps = {
  onSuccess?: () => void;
};

/**
 *
 * @param {SignupFormProps} props
 * @returns {JSX.Element}
 * @constructor
 */
export const SignupForm = (props: SignupFormProps) => {
  const router = useRouter();
  const [signupMutation] = useMutation(signup);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Avatar className={classes.signup}>
        <AccountCircleOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        新規アカウント作成
      </Typography>
      <Form
        submitText="作成"
        schema={SignupInput}
        initialValues={{ email: "horsewin@a.com", password: "abcd123456" }}
        onSubmit={async (values) => {
          try {
            await signupMutation(values);
            props.onSuccess?.();
          } catch (error) {
            if (
              error.code === "P2002" &&
              error.meta?.target?.includes("email")
            ) {
              // This error comes from Prisma
              return { email: ERROR_MESSAGES.SIGNUP.DUPLICATED_ADDRESS };
            } else {
              return { [FORM_ERROR]: error.toString() };
            }
          }
        }}
      >
        <TextField
          variant={"outlined"}
          margin={"normal"}
          name="email"
          label="メールアドレス"
          required
          fullWidth
          id={"email"}
          autoComplete={"email"}
        />
        <TextField
          variant={"outlined"}
          margin={"normal"}
          name="password"
          label="パスワード"
          required
          fullWidth
          id={"password"}
          type={"password"}
          autoComplete={"current-password"}
        />
      </Form>
      <Button fullWidth color="primary" onClick={() => router.replace("/")}>
        {"戻る"}
      </Button>
    </div>
  );
};

export default SignupForm;
