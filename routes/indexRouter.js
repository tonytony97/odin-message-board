const { Router } = require("express");
const userController = require("../controllers/userController");
indexRouter = Router();

const indexRouter = Router();

/* Original messages array 
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
*/

//GET messages and show on index
indexRouter.get("/", userController.getMessages);

indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "Send Message!" });
});

//POST form data for new message
indexRouter.post("/new", userController.postNewMessage);

//GET details button data
indexRouter.get("/:id", userController.getMessageDetails);

module.exports = indexRouter;
