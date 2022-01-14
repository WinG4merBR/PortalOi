const mongoose = require('mongoose');

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const user = new mongoose.Schema({
    name: String,
    number: String,
    password: String
});

module.exports = mongoose.model('user', user);