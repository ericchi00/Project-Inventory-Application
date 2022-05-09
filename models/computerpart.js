import mongoose from 'mongoose';

const { Schema } = mongoose;

const ComputerPartSchema = new Schema({
	name: { type: String, required: true, maxlength: 100 },
	category: { type: Schema.Types.ObjectId, ref: 'Category' },
	manufacturer: { type: Schema.Types.ObjectId, ref: 'Manufacturer' },
	description: { type: String },
	picture: { type: String },
	price: { type: Number, required: true },
	quantity: { type: Number },
	manufacture_date: { type: Date },
	features: [{ type: Object }],
});

ComputerPartSchema.virtual('url').get(function () {
	return '/computerpart/' + this._id;
});

export default mongoose.model('ComputerPart', ComputerPartSchema);
