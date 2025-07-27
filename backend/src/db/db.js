const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('Error to connecting MongoDB',err))};

module.exports = connectDB;