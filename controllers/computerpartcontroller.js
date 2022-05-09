import ComputerPart from '../models/computerpart.js';
import Manufacturer from '../models/manufacturer.js';
import Category from '../models/category.js';

const computerpart_list = async (req, res, next) => {
	try {
		const list = await ComputerPart.find()
			.populate('manufacturer')
			.populate('category')
			.exec();
		res.render('index', { title: 'Computer Part Database', list: list });
	} catch (error) {
		next(error);
	}
};

export default computerpart_list;
