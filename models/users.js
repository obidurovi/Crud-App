const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        minLength: 15,
        maxLength: 80
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        required: true
    },
    location: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female", "male", "female", "MALE", "FEMALE"],
        trim: true

    },
    image: {
        type: String
    }
}, {
    timestamps: true
});


// Export Schema
module.exports = mongoose.model('user', userSchema);