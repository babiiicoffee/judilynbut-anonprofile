const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    subject: {
        type: String, required: true
    },
    message: {
        type: String, required: true
    },
}, {
    timestamps: true,
    collection: "messages"
},
)

module.exports = mongoose.model("ContactSchema", ContactSchema);