import SQLiteDatabase, { Database } from "better-sqlite3";
let database: Database;
const connection = (): Promise<void> => {
  return new Promise((resolve) => {
    database = new SQLiteDatabase("data.db");
    loadUserDatabase(database);
    loadAdDatabase(database);
    return resolve();
  });
};
const loadUserDatabase = (db: Database): void => {
  db.prepare(
    `
CREATE TABLE IF NOT EXISTS user
(
id INTEGER PRIMARY KEY AUTOINCREMENT,
email VARCHAR NOT NULL
)
`
  ).run();
};

const loadAdDatabase = (db: Database): void => {
  db.prepare(
    `
CREATE TABLE IF NOT EXISTS ad
(
id INTEGER PRIMARY KEY AUTOINCREMENT,
title VARCHAR NOT NULL,
description VARCHAR NOT NULL,
price INTEGER NOT NULL,
userId INTEGER NOT NULL,
FOREIGN KEY (userId) REFERENCES user(id)
)
`
  ).run();
};

export { connection, database };
