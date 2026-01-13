
"use server"

import dotenv from "dotenv"
import { useSession } from "vinxi/http";
import { User } from "./types";
import { createUser, getUsers } from "./db";
import * as bcrypt from "bcrypt"


export type SessionData = {
  user_id?: number;
}
export const sessionConfig = {
  password: process.env.SESSION_SALT || "salty",
  name: "user_session",
}

export async function register(user: User): Promise<User> {
  //passwords on the database layer are transformed into hashes
  
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

  const valid_auth = bcrypt.compare(user.password, found_user.password);
  if (!valid_auth) {
    throw new Error("Wrong password");
  }

  const session = await useSession<SessionData>(sessionConfig);

  if (!session.data.user_id) {
    session.update({
      user_id: found_user.id,
    });
  }
}
