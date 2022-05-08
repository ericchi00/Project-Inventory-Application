import mongoose from 'mongoose';

const { Schema } = mongoose;

const CategorySchema = new Schema({
	name: { type: String, required: true, maxlength: 100 },
	description: { type: String },
	picture: { type: mongoose.SchemaTypes.url },
});

CategorySchema.virtual('url').get(function () {
	return '/category/' + this_id;
});

export default mongoose.model('Category', CategorySchema);
