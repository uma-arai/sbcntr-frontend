import React from "react"
import { AuthenticationError, Link, useMutation } from "blitz"
import { Form, FORM_ERROR } from "app/components/Form"
import login from "app/auth/mutations/login"
import { LoginInput } from "app/auth/validations"
import Avatar from "@material-ui/core/Avatar"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import { TextField } from "mui-rff"
import { ERROR_MESSAGES } from "utils/message"

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  login: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  signup: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

type LoginFormProps = {
  onSuccess?: () => void
}

/**
 *
 * @param {(() => void) | undefined} onSuccess
 * @returns {JSX.Element}
 * @constructor
 */
export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [loginMutation] = useMutation(login)
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Avatar className={classes.login}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        ログイン
      </Typography>
      <Form
        submitText="ログイン"
        schema={LoginInput}
        initialValues={{ email: "horsewin@a.com", password: "abcd123456" }}
        onSubmit={async (values) => {
          try {
            await loginMutation(values)
            onSuccess?.()
          } catch (error) {
            if (error instanceof AuthenticationError) {
              return { [FORM_ERROR]: ERROR_MESSAGES.LOGIN.INVALID_PASSWORD }
            } else {
              return {
                [FORM_ERROR]: ERROR_MESSAGES.LOGIN.NO_USER,
              }
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
      <div style={{ marginTop: "1rem" }}>
        はじめての方は<Link href="/signup">こちら</Link>
      </div>
    </div>
  )
}

export default LoginForm
