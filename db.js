require('dotenv').config();

const { Client } = require('pg');

const db = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Connecting to the database for a quick and easy test query.
db.connect()
  .then(() => {
    console.log('Connected to the database');
    return db.query('SELECT NOW()');
  })
  .then((result) => {
    console.log('Test query result:', result.rows);
  })
  .catch((err) => {
    console.error('Error connecting to the database or executing the test query:', err);
  });

module.exports = db;
