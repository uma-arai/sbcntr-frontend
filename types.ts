import { SimpleRolesIsAuthorized } from "@blitzjs/server"
import { User } from "db"
import { DefaultCtx, SessionContext } from "blitz"

declare module "blitz" {
  export interface Ctx extends DefaultCtx {
    session: SessionContext
  }
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<string>
    PublicData: {
      userId: User["id"]
      role: string
      orgId: number
    }
  }
}
