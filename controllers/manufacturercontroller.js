import Manufacturer from '../models/manufacturer.js';

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

export { manufacturer_detail, manufacturer_list };
