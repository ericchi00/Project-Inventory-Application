import mongoose from 'mongoose';

const { Schema } = mongoose;

const ComputerPartSchema = new Schema({
	name: { type: String, required: true, maxlength: 100 },
	description: { type: String },
	picture: { type: mongoose.SchemaTypes.url },
	price: { type: Number, required: true },
	quantity: { type: Number },
	manufacture_date: { type: Date },
});

CategorySchema.virtual('url').get(function () {
	return '/computerpart/' + this_id;
});

export default mongoose.model('ComputerPart', ComputerPartSchema);
