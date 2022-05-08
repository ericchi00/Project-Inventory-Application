import mongoose from 'mongoose';

const { Schema } = mongoose;

const ComputerPartSchema = new Schema({
	name: { type: String, required: true, maxlength: 100 },
	category: { type: Schema.Types.ObjectId, ref: 'Category' },
	manufacturer: { type: Schema.Types.ObjectId, ref: 'Manufacturer' },
	description: { type: String },
	picture: { type: mongoose.SchemaTypes.Url },
	price: { type: Number, required: true },
	quantity: { type: Number },
	manufacture_date: { type: Date },
	features: [{ type: String }],
});

CategorySchema.virtual('url').get(function () {
	return '/computerpart/' + this_id;
});

export default mongoose.model('ComputerPart', ComputerPartSchema);
