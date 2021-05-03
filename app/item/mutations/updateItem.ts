import { resolver } from "blitz";
import * as z from "zod";
import { apiClient } from "../../../utils/server/api-client";
import { APP_SERVICE_HOST } from "../../config";

type UpdateInput = { id: number; favorite: boolean };

const UpdateItemFavoriteStatus = z
  .object({
    id: z.number(),
    favorite: z.boolean(),
  })
  .nonstrict();

export default resolver.pipe(
  resolver.zod(UpdateItemFavoriteStatus),
  resolver.authorize(),
  async ({ id, favorite }: UpdateInput) => {
    const payload = {
      id,
      favorite,
    };

    return await apiClient<{ data: string }>(
      `/v1/Item/favorite`,
      "POST",
      undefined,
      JSON.stringify(payload),
      APP_SERVICE_HOST
    );
  }
);
