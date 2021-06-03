const mongoose = require("mongoose");

const EntrySchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    income: {
        type: Boolean,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Entry", EntrySchema);
