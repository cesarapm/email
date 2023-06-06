const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require("./routes/index"));

app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
