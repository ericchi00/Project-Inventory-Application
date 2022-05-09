import Manufacturer from '../models/manufacturer.js';
import { body, validationResult } from 'express-validator';

const manufacturer_list = async (req, res, next) => {
	try {
		const list = await Manufacturer.find({}, 'name').sort({ name: 1 }).exec();
		res.render('manufacturer_list', { title: 'Manufacturers', list: list });
	} catch (error) {
		next(error);
	}
};

const manufacturer_detail = async (req, res, next) => {
	try {
		const detail = await Manufacturer.findById(req.params.id).exec();
		res.render('manufacturer_detail', { title: detail.name, detail: detail });
	} catch (error) {
		next(error);
	}
};

const create_manufacturer_get = (req, res, next) => {
	res.render('manufacturer_form', {
		title: 'Create Manufacturer',
	});
};

const create_manufacturer_post = [
	// Validate and sanitize the name field.
	body('name', 'Manufacturer name required')
		.trim()
		.isLength({ min: 2 })
		.escape(),
	body('description', 'Description required')
		.trim()
		.isLength({ min: 2 })
		.escape(),

	(req, res, next) => {
		const errors = validationResult(req);

		// Create a genre object with escaped and trimmed data.
		const manufacturer = new Manufacturer({
			name: req.body.name,
			description: req.body.description,
			picture: req.body.picture,
		});

		if (!errors.isEmpty()) {
			console.log(errors);
			// There are errors. Render the form again with sanitized values/error messages.
			res.render('manufacturer_form', {
				title: 'Create Manufacturer',
				manufacturer: manufacturer,
				errors: errors.array(),
			});
			return;
		} else {
			Manufacturer.findOne({ name: req.body.name }).exec(function (err, found) {
				if (err) {
					return next(err);
				}
				if (found) {
					res.redirect(found.url);
				} else {
					manufacturer.save(function (err) {
						if (err) {
							return next(err);
						}
						res.redirect(manufacturer.url);
					});
				}
			});
		}
	},
];

export {
	manufacturer_detail,
	manufacturer_list,
	create_manufacturer_get,
	create_manufacturer_post,
};
