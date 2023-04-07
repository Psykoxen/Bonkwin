import SQLiteDatabase, { Database } from "better-sqlite3";
let database: Database;
const connection = (): Promise<void> => {
  return new Promise((resolve) => {
    database = new SQLiteDatabase("data.db");
    loadDatabase(database);
    return resolve();
  });
};
const loadDatabase = (db: Database): void => {
  db.prepare(
    `
CREATE TABLE IF NOT EXISTS user
(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR NOT NULL
)
`
  ).run();
};
export { connection, database };
