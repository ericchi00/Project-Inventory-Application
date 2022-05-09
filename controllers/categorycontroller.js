import Category from '../models/category.js';

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

export { category_list, category_detail };
