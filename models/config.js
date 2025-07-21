const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
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
