const express = require('express');
const sendMeRouter = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();


const transport = {
    //all of the configuration for making a site send an email.

    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
};

const transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if (error) {
        //if error happened code ends here
        console.error(error)
    } else {
        //this means success
        console.log('users ready to mail myself')
    }
});

console.log("from sendToMe");
sendMeRouter.post('/', (req, res, next) => {
    //make mailable object
    const mail = {
        from: process.env.THE_EMAIL,
        to: 'andpau96@gmail.com',
        subject: req.body.subject,
        text: `
      from:
      ${req.body.firstname} ${req.body.lastname} 

      contact: ${req.body.email}

      message: 

      ${req.body.text}`
    }
    // error handling goes here. 

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
});

module.exports = sendMeRouter;