import { Ctx } from "blitz";
import { apiClient } from "../../../utils/server/api-client";
import { Item, Prisma } from "@prisma/client";
import { APP_SERVICE_HOST } from "../../config";

interface GetItemInput extends Pick<Prisma.ItemFindManyArgs, "where"> {}

const getItems = async ({ where }: GetItemInput, { session }: Ctx) => {
  const fav = where?.favorite;
  return await apiClient<{ data: Item[] }>(
    `/v1/Items?${fav ? "favorite=" + fav : ""}`,
    "GET",
    undefined,
    undefined,
    APP_SERVICE_HOST
  );
};

export default getItems;
