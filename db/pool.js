const { Pool } = require("pg");

module.exports = Pool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    ssl: "require",
});
