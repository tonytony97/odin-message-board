const { render } = require("ejs");
const db = require("../db/queries");

const links = [
    { href: "/", text: "Home" },
    { href: "/new", text: "New Message" },
];

const openBtn = { href: "/details", text: "Message Details" };

async function getMessages(req, res) {
    const usernames = await db.getAllMessages();
    res.render("index", {
        title: "My Messageboard",
        links: links,
        messages: usernames,
        open: openBtn,
    });
}

async function postNewMessage(params) {
    const data = req.body;
    const msgText = data.msgText;
    const userName = data.userName;
    const id = messages.length;
    messages.push({ text: msgText, user: userName, added: new Date(), id: id });
    res.redirect("/");
}

async function getMessageDetails(params) {
    const id = req.params.id;

    res.render("details", {
        id: id,
        text: messages[id].text,
        user: messages[id].user,
        date: messages[id].added,
    });
}

module.exports = { getMessages, postNewMessage, getMessageDetails };
