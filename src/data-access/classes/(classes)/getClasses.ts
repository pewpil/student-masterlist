import { query } from "@solidjs/router";
import { getSession, SessionData, useSession } from "vinxi/http";
import { sessionConfig } from "~/lib/auth";
import { getClassesFromUserId } from "~/lib/db";
import { Classroom } from "~/lib/types";

export const getClasses = query(async (): Promise<Classroom[]> => {
  "use server"
  const session = await getSession(sessionConfig);
  if (!session.data.user_id) {
    throw new Error("User not logged in")
  }
  const classes = await getClassesFromUserId(session.data.user_id);
  return classes;

}, "get-classes");
