// import mysql from 'mysql';

// // Create a reusable connection pool
// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'course'
// });

// // Export the pool for reuse
// export = pool;


// import mysql from 'mysql';

// // Create a reusable connection pool
// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: 'sql6.freesqldatabase.com',
//   user: 'sql6679849',
//   password: 'imuJqLT1B4',
//   database: 'sql6679849',
//   port: 3306
// });

// // Export the pool for reuse
// export = pool;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('courseDB', 'root', 'password', {
 host: 'localhost',
 dialect: 'mysql'
});
// const sequelize = new Sequelize('sql6679849', 'sql6679849', 'imuJqLT1B4', {
//  host: 'sql6.freesqldatabase.com',
//  dialect: 'mysql'
// });

export default sequelize;
