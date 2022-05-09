import mongoose from 'mongoose';

const { Schema } = mongoose;

const ManufacturerSchema = new Schema({
	name: { type: String, required: true, maxlength: 100 },
	description: { type: String },
	picture: { type: String },
});

ManufacturerSchema.virtual('url').get(function () {
	return '/manufacturer/' + this._id;
});

export default mongoose.model('Manufacturer', ManufacturerSchema);
