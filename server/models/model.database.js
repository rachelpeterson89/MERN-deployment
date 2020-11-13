const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet must have a name!"],
        minlength: [3, "Name must be at least 3 characters"],
        maxlength: [50, "Name must be less than 50 characters"]
    }, 
    type: {
        type: String,
        required: [true, "Pet must have a type"],
        minlength: [3, "Type must be at least 3 characters"],
        maxlength: [50, "Type must be less than 50 characters"]
    },
    desc: {
        type: String,
        required: [true, "Pet must have a description!"],
        minlength: [3, "Description must be at least 3 characters"],
        maxlength: [50, "Description must be less than 50 characters"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }

}, {timestamps: true})

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;