const { Client } = require("pg");
const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text_message VARCHAR (200),
  date_added DATE
);

INSERT INTO usernames (username,text_message,date_added) 
VALUES
  ('Bryan','Hello World!',CURRENT_TIMESTAMP()),
  ('Odin29','Testing messages for the board', CURRENT_TIMESTAMP()),
  ('Damon_3','Que xopa!', CURRENT_TIMESTAMP());
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.CONNECT_STRING,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
