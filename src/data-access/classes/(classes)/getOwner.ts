import { User } from "~/lib/types";
import { getClasses } from "./getClasses";
import { getClassFromId, getUserFromId } from "~/lib/db";
import { query } from "@solidjs/router";

export const getOwner = query(async (class_id: number): Promise<User> => {
  "use server"
  const { owner_id } = await getClassFromId(class_id)
  const owner = await getUserFromId(owner_id!);
  return owner;
}, "get-owner");
