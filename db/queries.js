const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function postNewMessage(username, message) {
    await pool.query(
        "INSERT INTO messages (username,text_message,date_added) VALUES ($1,$2,CURRENT_TIMESTAMP)",
        [username, message],
    );
}

async function getMessageDetails(id) {
    const { rows } = await pool.query(
        "SELECT * FROM messages WHERE id = ($1)",
        [id],
    );
    return rows;
}

module.exports = {
    getAllMessages,
    postNewMessage,
    getMessageDetails,
};
