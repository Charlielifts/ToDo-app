import pkg from "pg";
const { Pool } = pkg;

import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD

})

pool.on("connect", () => {
    console.log("Connected to the database");
})

pool.on("error", (err) => {
    console.log("Database error", err);

})

export default pool;