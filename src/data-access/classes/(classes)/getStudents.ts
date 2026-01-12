import { query } from "@solidjs/router";
import { getUsersfromClassId } from "~/lib/db"
import { User } from "~/lib/types";


export const getStudents = query(async (class_id: number): Promise<User[]> => {
  "use server"
  const users = getUsersfromClassId(class_id);
  return users;
}, "get-students");
