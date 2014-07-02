var fs = require('fs');
var moment = require('moment');
var mkdirp = require('mkdirp');

var CountMeIn = {};

function appendStrToFile(file, str, cb) {
	fs.appendFile(file, str, function(err){
		if (err)
			return console.error(err);
		else
			cb(arguments);
	});
}

// Add up existing int plus new int1, add a date to them and console.log them
function prepareLine(int, int1) {
	var arr = [];
	arr.push(int + int1);
	arr.push('(');
	arr.push(moment(new Date()).format('YYYY-MM-DD HH:mm:ss Z'));
	arr.push(')');

	console.log(arr.join(' '));
}

CountMeIn.readFile = function(file, cb){
	fs.readFile(file, {encoding: 'utf8'}, function(err, data){
		if (err) {
			if (err.code === 'ENOENT')
				return console.error('FILE DOESN\'T EXIST')
			else return console.error(err);
		} else
			return cb(data);
	});
};

module.exports = CountMeIn;

