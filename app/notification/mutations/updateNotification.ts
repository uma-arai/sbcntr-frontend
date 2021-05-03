import { resolver } from "blitz";
import { apiClient } from "../../../utils/server/api-client";
import { NOTIF_SERVICE_HOST } from "../../config";

export default resolver.pipe(resolver.authorize(), async () => {
  return await apiClient<{ data: string }>(
    `/v1/Notifications/Read`,
    "POST",
    undefined,
    undefined,
    NOTIF_SERVICE_HOST
  );
});
