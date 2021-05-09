import { User } from "db";
import { DefaultCtx, SessionContext, SimpleRolesIsAuthorized } from "blitz";

export type Role = "admin" | "user";

declare module "blitz" {
  export interface Ctx extends DefaultCtx {
    session: SessionContext;
  }
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<Role>;
    PublicData: {
      userId: User["id"];
      role: string;
      orgId: number;
    };
  }
}
