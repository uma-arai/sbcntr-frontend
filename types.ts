import { User } from "db";
import { DefaultCtx, SessionContext } from "blitz";

declare module "blitz" {
  export interface Ctx extends DefaultCtx {
    session: SessionContext;
  }
  export interface Session {
    PublicData: {
      userId: User["id"];
      role: string;
      orgId: number;
    };
  }
}
