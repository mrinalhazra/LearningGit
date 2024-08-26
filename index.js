import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port= 4000;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static("public"));

app.get("/", (req, res) => {
    // res.sendFile(__dirname + "/public/index.html");
    res.render("index.ejs");

});

app.get("/history", (req, res) => {
    res.render("history.ejs");
});

app.get("/design", (req, res) => {
    res.render("design.ejs");
});

app.get("/performance", (req, res) => {
    res.render("performance.ejs");
});




app.listen(port, (req, res) => {
    console.log(`Running on port ${port}`);
});