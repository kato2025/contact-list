// db.js
const { Pool } = require('pg');
require('dotenv').config(); // If you're using environment variables

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;