const { Router, text } = require("express");
//const userController = require("<path-to-user-controller>");

const indexRouter = Router();

const messages = [
    {
        id: 0,
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        id: 1,
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

const links = [
    { href: "/", text: "Home" },
    { href: "/new", text: "New Message" },
];

const openBtn = { href: "/details", text: "Message Details" };

indexRouter.get("/", (req, res) => {
    res.render("index", {
        title: "My Messageboard",
        links: links,
        messages: messages,
        open: openBtn,
    });
});

indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "Send Message!" });
});

//POST form data for new message
indexRouter.post("/new", (req, res) => {
    const data = req.body;
    const msgText = data.msgText;
    const userName = data.userName;
    const id = messages.length;
    messages.push({ text: msgText, user: userName, added: new Date(), id: id });
    res.redirect("/");
});

//GET details buton data
indexRouter.get("/:id", (req, res) => {
    const id = req.params.id;

    res.render("details", {
        id: id,
        text: messages[id].text,
        user: messages[id].user,
        date: messages[id].added,
    });
});

module.exports = indexRouter;
