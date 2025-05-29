import { Pool } from "pg";

// const { Pool } = pkg;

let pool;

console.log("process.env.DATABASE", process.env.DATABASE);

if (process.env.DATABASE === "LOCAL") {
  pool = new Pool({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "user",
    database: "js_demo_14",
  });
} else if (process.env.DATABASE === "SUPABASE") {
  pool = new Pool({
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    port: "5432",
    user: "postgres.npxswnloyvdrrifnines",
    password: "DbU7rAvWpZR1xLuo",
    database: "postgres",
    pool_mode: "session",
  });
}

// console.log('connect database', pool.options);

export default pool;
