const express = require("express");
const router = express.Router();
const ContactSchema = require("../models/contactModel");
const nodemailer = require("nodemailer");

router.route("/sendEmail").post((req, res) => {
    console.log(req.body);
    // let newContactSchema = new ContactSchema(req.body);
    // newContactSchema.save().then(createdContactSchema => {
    //     console.log("Created Contact Schema",createdContactSchema);
    // });
    let mailer = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ziekind07@gmail.com",
            pass: "October18,2019Love",
        }
    });
    let mailOptions = {
        from: `${req.body.email}`,
        to: "butanonjudilyn@gmail.com",
        subject: req.body.subject,
        text: `From: ${req.body.name}\nEmail: ${req.body.email}\n\nMessage:\n` + req.body.message,
    };
    mailer.sendMail(mailOptions, (error, response) => {
        if(!error){
            res.status(200).send({"message": "message sent!"});
        }
        else {
            console.log(error);
            res.status(400).send({"message": "we can not send your email"});
        }
    });
});

module.exports = router;