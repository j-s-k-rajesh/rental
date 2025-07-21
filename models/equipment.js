const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/login', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
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
