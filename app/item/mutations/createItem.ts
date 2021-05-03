import { resolver } from "blitz";
import db from "db";
import * as z from "zod";
import { ItemInput } from "../validataion";

const CreateItem = z.object(ItemInput.shape).nonstrict();

export default resolver.pipe(
  resolver.zod(CreateItem),
  resolver.authorize(),
  async (input) => {
    //@ts-ignore
    return await db.item.create({ data: input });
  }
);
