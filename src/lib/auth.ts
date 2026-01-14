
"use server"

import dotenv from "dotenv"
import { getSession, SessionConfig, useSession } from "vinxi/http";
import { User } from "./types";
import { createUser, getUsers } from "./db";
import * as bcrypt from "bcrypt"


export type SessionData = {
  user_id?: number;
}
export const sessionConfig: SessionConfig = {
  password: process.env.SESSION_SALT || "salty",
  name: "user_session",
  maxAge: 3600,
}

export async function useAuthSession() {
  return await useSession<SessionData>(sessionConfig);
}

export async function register(user: User): Promise<User> {
  //passwords on the database layer are transformed into hashes
  if (!user.password) {
    throw new Error("password unfilled")
  }
  
  const hashed_password = await bcrypt.hash(user.password, Number(process.env.HASH_SALT_ROUNDS) || 10)
  return await createUser({...user, password: hashed_password});
}

//authenticates and creates a user session 
export async function authenticate(user: User) {

  const users = await getUsers();
  const [found_user] = users.filter(u => user.name === u.name);
  if (!found_user) {
    throw new Error("No such user");
  }
  if (!user.password) {
    throw new Error("password unfilled")
  }

  const valid_auth = await bcrypt.compare(user.password, found_user.password!);
  if (!valid_auth) {
    throw new Error("Wrong password");
  }

  const session = await useAuthSession();
  await session.update({user_id: found_user.id});
  
}
