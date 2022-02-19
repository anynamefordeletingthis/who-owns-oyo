const path = require("path");

const root = path.resolve(__dirname);

const express = require("express");
const router = express.Router();

router.use(express.static(root));

router.get("/", (req, res) => {
    res.send("./index.html")
})

const app = express();

app.use(router);

app.listen(3000);
