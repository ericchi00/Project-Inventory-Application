import Manufacturer from '../models/manufacturer.js';

const manufacturer_list = async (req, res, next) => {
	try {
		const list = await Manufacturer.find({}, 'name').sort({ name: 1 }).exec();
		res.render('manufacturer_list', { title: 'Manufacturers', list: list });
	} catch (error) {
		next(error);
	}
};

export default manufacturer_list;
