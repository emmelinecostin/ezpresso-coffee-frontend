const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: req.body.eventDate, // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>First Name: ${req.body.firstName}</li>
        <li>Last Name: ${req.body.lastName}</li>
        <li>Email: ${req.body.email}</li>
        <li>Event Date: ${req.body.eventDate}</li>
        <li>Invited Guests: ${req.body.invitedGuests}</li>
        <li>Event Location: ${req.body.eventLocation}</li>
        <li>Additional Information: ${req.body.additionalInfo}</li>
      </ul>
      `
    };

    console.log(mailOptions); 
 
    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong.'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
      console.log(data)
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. '
    });
  }

});

app.listen(3030, () => {
  console.log('server start on port 3030');
});