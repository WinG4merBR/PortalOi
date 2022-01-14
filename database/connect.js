const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pui:celoiqua@cluster0.ykpor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const user = new mongoose.Schema({
    name: String,
    number: String,
    password: String
});

module.exports = mongoose.model('user', user);