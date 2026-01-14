import { query } from "@solidjs/router";
import { getCookie, getSession, useSession } from "vinxi/http";
import { sessionConfig, SessionData, useAuthSession } from "~/lib/auth";
import { getClassesFromUserId } from "~/lib/db";
import { Classroom } from "~/lib/types";

const getClasses = query(async (): Promise<Classroom[]> => {
  "use server"
  const session = await useAuthSession();

  if (!session.data.user_id) {
    throw new Error(`User not logged in ${session.data.user_id}`)
  }
  const classes = await getClassesFromUserId(session.data.user_id);
  return classes;

}, "get-classes");

export default getClasses;
