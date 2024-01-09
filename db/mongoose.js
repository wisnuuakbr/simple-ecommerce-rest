const mongoose = require('mongoose');

// Set strictQuery to false to address the DeprecationWarning
mongoose.set('strictQuery', false);

// make connection to db
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
});