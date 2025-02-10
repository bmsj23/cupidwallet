const express = require('express');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || '323a3fb321809e518c6c6f9fa8e44a9d-1654a412-c53536a2'});

const app = express();
app.use(express.json());  // to parse JSON bodies

const port = process.env.PORT || 3000;



// Create an endpoint to send an email when the user clicks "Yes"
app.post('/send-email', (req, res) => {
  mg.messages.create('sandbox-123.mailgun.org', {
    from: "Excited User <mailgun@sandbox8e4b8d8124124dca8e3b0c0b5dee8f72.mailgun.org>",
    to: ["alagadnidex@gmail.com"],
    subject: "Hello",
    text: "The user said YES to be my Valentine!",
    html: "<h1>The user said YES to be my Valentine!</h1>"
  })
  .then(msg => {
    res.status(200).send({ success: true, message: 'Email sent!' });
  })
  .catch(err => {
    res.status(500).send({ success: false, message: 'Failed to send email', error: err });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
