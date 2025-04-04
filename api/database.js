const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "pg",
  host: "localhost",
  port: "5432",
  database: "chatapp",
});
// const pool = new Pool({
//   user: "postgres",
//   // password: "saadkhan2211",
//   // password: "arham",
//   host: "database-1.cpies4agy8vq.us-east-1.rds.amazonaws.com",
//   port: "5432",
//   database: "halal_delivery",
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

module.exports = pool;
