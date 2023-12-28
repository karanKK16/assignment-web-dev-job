import { createPool } from "mysql2/promise";
// import createPool

const pool = createPool({
  host: 'localhost',
  user:'root',
  password: 'Karan@123',
  database: 'schools',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
console.log(1);

export async function query({ query, values = [] }) {
  try {
    const [rows, fields] = await pool.execute(query, values);
    console.log("1");
    return rows;
  } catch (error) {
    console.error('Database Error:', error.message);
    throw error;
  }
}

export default pool;