import * as z from "zod"
import { ERROR_MESSAGES } from "utils/message"

export const SignupInput = z.object({
  email: z.string().email(ERROR_MESSAGES.EMAIL),
  password: z.string().min(8, ERROR_MESSAGES.PASSWORD_LENGTH).max(25, ERROR_MESSAGES.PASSWORD_LENGTH)
})
export type SignupInputType = z.infer<typeof SignupInput>

export const LoginInput = z.object({
  email: z.string().email(ERROR_MESSAGES.EMAIL),
  password: z.string()
})
export type LoginInputType = z.infer<typeof LoginInput>
