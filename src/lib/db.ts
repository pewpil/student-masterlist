
"use server"

import dotenv from "dotenv"
import { Client, Pool } from "pg"
import { Classroom, User } from "./types";

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionString: process.env.DB_SRC,
  database: process.env.DB_NAME,
});

export async function migrateUp() {

  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `);

  console.log("user table up");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS classes (
    id SERIAL PRIMARY KEY,
    owner_id SERIAL,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255)
    FOREIGN KEY (owner_id) REFERENCES users (id)
    );
  `);

  console.log("classes table up");

  await pool.query(`
    CREATE TABLE IF NOT EXISTS enrollments (
    id SERIAL PRIMARY KEY,
    user_id SERIAL,
    class_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES users (id)
    FOREIGN KEY (class_id) REFERENCES classes (id)
    );
  `);

  console.log("enrollments table up");

}

export async function migrateDown() {
  await pool.query(`
    DROP TABLE IF EXISTS users, classes, enrollments;
  `);
  console.log("users, classes, enrollments down");
}

//user functions

export async function getUsers(): Promise<User[]> {
  const query = {
    name: "get-users",
    text: `
      SELECT *
      FROM users
    `,
    values: [],
  };
  const res = await pool.query(query);
  return res.rows;

}
export async function getUserFromId(id: number): Promise<User> {
  const query = {
    name: "get-user-from-id",
    text: `
    FROM users 
    SELECT *
    WHERE id = $1;
    `,
    values: [id],
  };
  const res = await pool.query(query);
  return res.rows[0];
}

export async function createUser(user: User): Promise<User> {
  const users = await getUsers();

  const usernames = users.map(u => u.name);

  if (usernames.includes(user.name)) {
    throw new Error("username already taken");
  }

  if (user.password.length < 8) {
    throw new Error("password must be at least 8 characters");
  }

  //can add other restrictions here
  //...

  const query = {
    name: "create-user",
    text: `
      INSERT INTO users(name, password)
      VALUES ($1, $2)
      RETURNING *;
    `,
    values: [user.name, user.password],
    
  }

  const res = await pool.query(query);
  return res.rows[0];

}

//class functions

export async function getClasses(): Promise<Classroom[]> {
  const query = {
    name: "get-classes",
    text: `
      FROM classes
      SELECT *;
    `,
    values: [],
  };
  const res = await pool.query(query);
  return res.rows;

}
export async function getClassFromId(id: number): Promise<Classroom> {
  const query = {
    name: "get-class-from-id",
    text: `
      FROM classes 
      SELECT *
      WHERE id = $1;
    `,
    values: [id],
  };
  const res = await pool.query(query);
  return res.rows[0];
}

export async function createClass(classroom: Classroom): Promise<Classroom> {
  const classes = await getClasses();

  const class_names = classes.map(c => c.name);

  if (class_names.includes(classroom.name)) {
    throw new Error("class name already taken");
  }

  if (classroom.password && classroom.password.length < 8) {
    throw new Error("password must be at least 8 characters");
  }

  //can add other restrictions here
  //...

  const query = {
    name: "create-class",
    text: `
      INSERT INTO class(owner_id, name, password)
      VALUES ($1, $2)
      RETURNING *
    `,
    values: [classroom.owner_id, classroom.name, classroom.password],
    
  }

  const res = await pool.query(query);
  return res.rows[0];

}

//enrollments

export async function createEnrollment(user: User, classroom: Classroom): Promise<void> {
  if (!user.id) {
    throw new Error("User not valid");
  }

  if (!classroom.id) {
    throw new Error("Class not valid");
  }

  const classes = await getClassesFromUserId(user.id);
  const class_names = classes.map(c => c.name);

  if (class_names.includes(classroom.name)) {
    throw new Error("Already enrolled");
  }

  const query = {
    name: "create-enrollment",
    text: `
      INSERT INTO enrollments (user_id, class_id) 
      VALUES ($1, $2)
      RETURNING id;
    `,
    values: [user.id, classroom.id]
  }

  await pool.query(query);

}
export async function getClassesFromOwnerId(id: number): Promise<Classroom[]> {
  const query = {
    name: "get-classes-from-owner-id",
    text: `
      FROM classes
      SELECT *
      WHERE owner_id = $1;
    `,
    values: [id],
  };
  const res = await pool.query(query);
  return res.rows;

}
export async function getClassesFromUserId(id: number): Promise<Classroom[]> {
  const query = {
    name: "get-classes-from-user-id",
    text: `
      FROM enrollments
      SELECT classes.id, classes.name, classes.password
      INNER JOIN users ON enrollments.user_id = users.id
      INNER JOIN classes ON enrollments.class_id = classes.id
      WHERE users.id = $1;
    `,
    values: [id],
  };
  const res = await pool.query(query);
  return res.rows;

}

export async function getUsersfromClassId(id: number): Promise<User[]> {
  const query = {
    name: "get-users-from-class-id",
    text: `
      FROM enrollments
      SELECT users.id, users.name, users.password
      INNER JOIN users ON enrollments.user_id = users.id
      INNER JOIN classes ON enrollments.class_id = classes.id
      WHERE classes.id = $1;
    `,
    values: [id],
  };
  const res = await pool.query(query);
  return res.rows;

}
