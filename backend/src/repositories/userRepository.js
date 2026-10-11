
const pool = require('../config/db');

async function findByEmail(email) {
  const result = await pool.query(
    `SELECT id, username, email, password
     FROM users
     WHERE email = $1`,
    [email]
  );

  return result.rows[0] || null;
}

async function createUser({ username, email, password }) {
  const result = await pool.query(
    `INSERT INTO users (
       username,
       email,
       password,
       created_at,
       updated_at
     )
     VALUES (
       $1,
       $2,
       $3,
       TO_CHAR(NOW() AT TIME ZONE 'Asia/Seoul', 'YYYYMMDDHH24MISS'),
       TO_CHAR(NOW() AT TIME ZONE 'Asia/Seoul', 'YYYYMMDDHH24MISS')
     )
     RETURNING id, username, email, created_at, updated_at`,
    [username, email, password]
  );

  return result.rows[0];
}

module.exports = {
  findByEmail,
  createUser,
};
