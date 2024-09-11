const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const indexRouter = require("./routes/indexRouter");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const PORT = 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
