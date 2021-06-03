const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	entries: [
		{
			entryId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Entry",
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
		},
	],
});

module.exports = mongoose.model("Category", CategorySchema);
