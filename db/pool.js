const { Pool } = require("pg");

module.exports = new Pool({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: "require",
});

module.exports = new Pool({
    connectionString: process.env.CONNECT_STRING,
});
