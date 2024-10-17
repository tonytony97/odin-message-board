const { render } = require("ejs");
const db = require("../db/queries");

const links = [
    { href: "/", text: "Home" },
    { href: "/new", text: "New Message" },
];

const openBtn = { text: "Message Details" };

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    console.log("messages: ", messages);
    res.render("index", {
        title: "My Messageboard",
        links: links,
        messages: messages,
        open: openBtn,
    });
}

async function postNewMessage(req, res) {
    const data = req.body;
    const msgText = data.msgText;
    const userName = data.userName;
    await db.postNewMessage(userName, msgText);
    console.log("req.body: ", req.body);
    res.redirect("/");
}

async function getMessageDetails(req, res) {
    const id = req.params.id;
    console.log("ID: ", id);
    const message = await db.getMessageDetails(id);
    console.log("message: ", message);
    res.render("details", {
        title: "Message Details",
        links: links,
        messages: message,
    });
}

module.exports = { getMessages, postNewMessage, getMessageDetails };
