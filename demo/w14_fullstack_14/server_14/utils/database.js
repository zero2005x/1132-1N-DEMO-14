import pkg from "pg";
const { Pool } = pkg;

let pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "user",
  database: "js_demo_14",
});

//console.log("Connecting to the database...", pool.options);

export default pool;
