import { useQuery } from "blitz";
import getData from "app/item/queries/getItems";

export const useAllData = (conditions: { favorite: boolean } | null) => {
  const params = conditions
    ? {
        where: {
          favorite: conditions.favorite || false,
        },
      }
    : {};
  const [data] = useQuery(getData, params, { suspense: false });

  // TODO: res?.result.data;
  return data;
};
