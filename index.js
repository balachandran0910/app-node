const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const verifyToken = require("./src/middleware/auth");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require("./config/db");

app.use("/", require("./src/routes/LoginRoutes"))
app.use("/users", require("./src/routes/UserRoutes"))

app.use("/profile", require("./src/routes/ApiRoutes"))

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
})

app.get("/api", async (req, res) => {
    return "Connected"
});

app.listen(PORT, async () => { })
