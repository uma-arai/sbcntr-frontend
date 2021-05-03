import { Ctx } from "blitz"
import db from "db"

const getCurrentUser = async (_ = null, { session }: Ctx) => {
  if (!session.userId) return null

  return await db.user.findFirst({
    where: { id: session.userId },
    select: { id: true, name: true, email: true, role: true },
  })
}

export default getCurrentUser
