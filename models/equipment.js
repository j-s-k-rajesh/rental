const mongoose = require('mongoose');

const mongoURI = process.env.mongouri;
// Connect to MongoDB
mongoose.connect("mongodb+srv://jamisivakrishnarajesh:zhxmE3k45k5ukmlw@cluster.kenz2hu.mongodb.net/?retryWrites=true&w=majority&appName=cluster")
  .then(() => console.log('✅ MongoDB usereq connected'))
  .catch(err => console.error('❌ MongoDB usereq connection error:', err));

// Define the schema
const usereqSchema = new mongoose.Schema({
  equipmentname: String,
  description: String,
  price: Number,
  imageurl: String
});

// Create the model
const Usereq = mongoose.model('Usereq', usereqSchema); // Use singular model name

// Export the model
module.exports = Usereq;
