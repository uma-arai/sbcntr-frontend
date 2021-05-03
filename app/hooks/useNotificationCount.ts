import { useQuery } from "blitz";
import getNotificationCount from "app/notification/queries/getNotificationCount";

export const useNotificationCount = () => {
  const [count] = useQuery(getNotificationCount, null, { suspense: false });
  if (count?.error) {
    throw new Error("count");
  }

  return count?.result.data;
};
