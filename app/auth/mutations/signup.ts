import { Ctx } from "blitz"
import db from "db"
import { hashPassword } from "app/auth/auth-utils"
import { SignupInput, SignupInputType } from "app/auth/validations"

export default async function signup(input: SignupInputType, ctx: Ctx) {
  // This throws an error if input is invalid
  // 1. Validate input data
  // 2. Validate user credentials
  const { email, password } = SignupInput.parse(input)
  const hashedPassword = await hashPassword(password)

  // 3. Fetch user data
  const user = await db.user.create({
    data: { email: email.toLowerCase(), hashedPassword, role: "user" },
    select: { id: true, name: true, email: true, role: true },
  })

  // 4. Create a new session (log in)
  await ctx.session.$create({ userId: user.id, role: user.role, orgId: 1 })

  return user
}
