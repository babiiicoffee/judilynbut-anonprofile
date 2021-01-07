const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;

const bodyparser = require("body-parser");
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

// const dbURL = "mongodb+srv://dbJudilyn:dbJudilyn@cluster0.qfluk.mongodb.net/JudilynBut-anonProfile?retryWrites=true&w=majority";

// const dbURL = "mongodb://127.0.0.1/JudilynBut-anonProfile"

// mongoose.Promise = global.Promise;

// mongoose.connect(dbURL, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}).then(() => {
//     console.log("Connected to database.");
// }).catch(err => {
//     console.log(`ERROR: ${err}`);
// });

const contactController = require("./controller/contactController");

app.use("/api",contactController);

const server = app.listen(PORT, () => {
    console.log("Listening at http://localhost/" + PORT);
})
