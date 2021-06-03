// https://stackoverflow.com/a/52243371
// https://stackoverflow.com/questions/5535610/mongoose-unique-index-not-working
// https://www.google.com/search?channel=fs&client=ubuntu&q=mongoose.Schema+unique+doesn%27t+work
// https://stackoverflow.com/questions/51350094/mongoose-unique-not-working

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
});

module.exports = mongoose.model("User", UserSchema);
