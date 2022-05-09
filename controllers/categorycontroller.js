import Category from '../models/category.js';
import { body, validationResult } from 'express-validator';

const category_list = async (req, res, next) => {
	try {
		const list = await Category.find({}, 'name').sort({ name: 1 }).exec();
		res.render('category_list', { title: 'Categories', list: list });
	} catch (error) {
		next(error);
	}
};

const category_detail = async (req, res, next) => {
	try {
		const detail = await Category.findById(req.params.id);
		res.render('category_detail', { title: detail.name, detail: detail });
	} catch (error) {
		next(error);
	}
};

const create_category_get = (req, res, next) => {
	res.render('category_form', {
		title: 'Create Category',
	});
};

const create_category_post = [
	// Validate and sanitize the name field.
	body('name', 'Category name required').trim().isLength({ min: 2 }).escape(),
	body('description', 'Description required')
		.trim()
		.isLength({ min: 2 })
		.escape(),

	(req, res, next) => {
		const errors = validationResult(req);

		// Create a genre object with escaped and trimmed data.
		const category = new Category({
			name: req.body.name,
			description: req.body.description,
			picture: req.body.picture,
		});

		if (!errors.isEmpty()) {
			console.log(errors);
			// There are errors. Render the form again with sanitized values/error messages.
			res.render('category_form', {
				title: 'Create Category',
				category: category,
				errors: errors.array(),
			});
			return;
		} else {
			Category.findOne({ name: req.body.name }).exec(function (err, found) {
				if (err) {
					return next(err);
				}
				if (found) {
					res.redirect(found.url);
				} else {
					category.save(function (err) {
						if (err) {
							return next(err);
						}
						res.redirect(category.url);
					});
				}
			});
		}
	},
];

export {
	category_list,
	category_detail,
	create_category_get,
	create_category_post,
};
