const mongoose = require('mongoose');
const mongoURI = process.env.mongouri;

// Connect to MongoDB
mongoose.connect("mongodb+srv://jamisivakrishnarajesh:zhxmE3k45k5ukmlw@cluster.kenz2hu.mongodb.net/?retryWrites=true&w=majority&appName=cluster")
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Define the schema
const signupSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  username: String,
  password: String
});

// Create the model
const User = mongoose.model('users', signupSchema); // Use singular model name

// Export the model
module.exports = User;
