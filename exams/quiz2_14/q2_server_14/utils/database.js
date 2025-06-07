import { Pool } from "pg";
import dotenv from "dotenv";
// const { Pool } = pkg;
dotenv.config();
let pool;

console.log("process.env.DATABASE", process.env.DATABASE);

if (process.env.DATABASE === "LOCAL") {
  pool = new Pool({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "user",
    database: "js_quiz2_14",
  });
} else if (process.env.DATABASE === "SUPABASE") {
  pool = new Pool({
    host: "aws-0-us-west-1.pooler.supabase.com",
    port: "5432",
    user: "postgres.loxlxwyirrqkjrruqboq",
    password: "mgFmyK8FtySSC5mH",
    database: "postgres",
  });
}

// console.log('connect database', pool.options);

export default pool;
