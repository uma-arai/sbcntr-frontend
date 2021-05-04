import { useQuery } from "blitz";
import getNotifications from "../notification/queries/getNotifications";

export const useNotifications = () => {
  const [res] = useQuery(getNotifications, null, { suspense: false });
  if (res?.error) {
    throw new Error("Notifications");
  }

  return res?.result.data;
};
