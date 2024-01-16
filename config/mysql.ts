import mysql from 'mysql';

// Create a reusable connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'course'
});

// Export the pool for reuse
export = pool;