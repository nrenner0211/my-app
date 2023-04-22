// require('dotenv').config();
const express = require("express");
const router = express.Router();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
    res.setHeader('Cache-Control: max-age=86400')
})

app.listen(PORT, () => {
    console.log("App is listening on PORT 5000");
});