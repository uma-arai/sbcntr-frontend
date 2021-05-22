import { apiClient } from "utils/server/api-client";
import { Ctx } from "blitz";
import { NOTIF_SERVICE_HOST } from "../../config";

const getNotificationCount = async (_ = null, { session }: Ctx) => {
  //return {
  //  result: {
  //    data: 3,
  //  },
  //  error: null,
  //};
  return await apiClient<{ data: string }>(
    `/v1/Notifications/Count`,
    "GET",
    undefined,
    undefined,
    NOTIF_SERVICE_HOST
  );
};

export default getNotificationCount;
