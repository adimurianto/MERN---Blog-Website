const express = require("express");
const mongoose = require("mongoose");
const {MONGOURI} = require("./keys");
const app = express();
const PORT = 5000;

// Connection to MongoDB
mongoose.connect(MONGOURI);
mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Error : " + error);
});

// Models import
require("./models/post");
require("./models/category");

app.use(express.json());

// Routes import
app.use(require("./routes/post"));
app.use(require("./routes/category"));

app.listen(PORT, () => {
    console.log("Server is stated at " + PORT);
});