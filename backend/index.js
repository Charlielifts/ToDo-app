import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "todo_db",
  password: "Admin",
  port: 5432,
})
export default pool