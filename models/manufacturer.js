import mongoose from 'mongoose';

const { Schema } = mongoose;

const ManufacturerSchema = new Schema({
	name: { type: String, required: true, maxlength: 100 },
	description: { type: String },
	picture: { type: mongoose.SchemaTypes.Url },
});

CategorySchema.virtual('url').get(function () {
	return '/manufacturer/' + this_id;
});

export default mongoose.model('Manufacturer', ManufacturerSchema);
