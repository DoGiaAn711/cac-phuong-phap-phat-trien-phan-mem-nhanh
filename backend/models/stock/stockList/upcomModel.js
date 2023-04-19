const mongoose = require('mongoose');

const upcomSchema = mongoose.Schema(
	{
		name: { type: 'String', require: true },
		symbol: { type: 'String', require: true },
		timeUpdate: { type: 'String' },
		reference: { type: 'String', require: true },
		ceil: { type: 'String', require: true },
		floor: { type: 'String', require: true },
		currentPrice: { type: 'String' },
		high: { type: 'String', require: true },
		low: { type: 'String', require: true },
		change: { type: 'String', require: true },
		changePercent: { type: 'String', require: true },
		turnOver: { type: 'String', require: true },
	},
	{
		timestamps: true,
	}
);

const Upcom = mongoose.model('Upcom', upcomSchema);
module.exports = Upcom;
