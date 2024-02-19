// server.js
//jshint esversion:6
require('../db');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;
var PostSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String, required: true},
  message: { type: String, required: true}
}, {timestamps: true });
module.exports = mongoose.model('Post', PostSchema);

// app.use(bodyParser.urlencoded({ extended: true }));

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://jeonyounsooesa:<password>@cluster0.dh7uttn.mongodb.net/profile', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })

// .then(() => {
//   console.log('MongoDB connected successfully');
// })
// .catch((err) => {
//   console.error('MongoDB connection error:', err);
// });

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// Define a schema and model for your data
// const contactSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   message: String,
// });



// const Contact = mongoose.model('Contact', contactSchema);

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "./components/Contact.js")
// })

// Handle form submissions
// app.post('/submit-form', function(req, res) {
  // const { name, email, message } = req.body;

  // const newContact = new Contact({ 
  //   name: req.body.name,
  //   email: req.body.email,
  //   message: req.body.message 
  // });

  // newContact.save();
  // res.redirect('/');
//     if (err) {
//       return res.status(500).send(err);
//     }

//     return res.status(200).send('Form submitted successfully');
//   });
// });

