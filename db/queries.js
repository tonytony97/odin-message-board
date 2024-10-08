const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(username, message) {
    await pool.query("INSERT INTO messages (username,message) VALUES ($1,$2)", [
        username,
        message,
    ]);
}

async function getMessageDetails(id) {
    const { rows } = await pool.query(
        "SELECT * FROM messages WHERE id LIKE ($1)",
        [id],
    );
    return rows;
}

module.exports = {
    getAllMessages,
    insertMessage,
    getMessageDetails,
};
