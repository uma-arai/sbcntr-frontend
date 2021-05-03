import { apiClient } from "utils/server/api-client";
import { Ctx } from "blitz";
import { NOTIF_SERVICE_HOST } from "../../config";
import { Notification } from "@prisma/client";

const getNotifications = async (_ = null, { session }: Ctx) => {
  //return {
  //  result: {
  //    data: [
  //      {
  //        id: 1,
  //        title: "通知1",
  //        description: "通知ダヨ",
  //        category: "Information",
  //        read: true,
  //        createdAt: "2021/03/17 10:39:06",
  //      },
  //      {
  //        id: 2,
  //        title: "通知2",
  //        description: "通知2ダヨ",
  //        category: "News",
  //        read: false,
  //        createdAt: "2021/04/17 10:39:06",
  //      },
  //    ],
  //  },
  //  error: null,
  //};
  return await apiClient<{ data: Notification[] }>(
    `/v1/Notifications`,
    "GET",
    undefined,
    undefined,
    NOTIF_SERVICE_HOST
  );
};

export default getNotifications;
