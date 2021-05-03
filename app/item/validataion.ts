import * as z from "zod";
import { ERROR_MESSAGES } from "utils/message";

export const ItemInput = z.object({
  title: z
    .string()
    .nonempty(ERROR_MESSAGES.REQUIRED)
    .max(15, ERROR_MESSAGES.ITEM.MAX_TITLE),
  name: z.string().nonempty(ERROR_MESSAGES.REQUIRED),
  img: z.string(),
});
export type DataInputType = z.infer<typeof ItemInput>;
