const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://masai-lms:masai-lms@cluster0.jkkul.mongodb.net/test")
}

module.exports = connect