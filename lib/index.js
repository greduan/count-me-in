var moment = require('moment');

var CountMeIn = {};

// Read last line of input and figure out what the integer is, return int
CountMeIn.readLastLine = function(str){
	var arr = str.split('\n');
	arr.pop(); // On a sane system, last entry always empty

	var lastLine = arr.pop();

	var int = lastLine.match(/[^\.]+/)[0];
	int = parseInt(int);

	return int;
};

// Adds num2 to num, if reduce is true it detracts num2 from num1
// For now if the result turns out to be less than 0 it outputs a zero
CountMeIn.add = function(num, num2, reduce){
	var int;
	if (reduce)
		int = num - num2;
	else
		int = num + num2;
	if (int < 0 || int <= -1)
		int = 0;
	return int;
};

// Add up existing int plus new int1, add a date to them and console.log them
CountMeIn.makeLine = function(int){
	var arr = [];
	arr.push(int + '.');
	arr.push('(');
	arr.push(moment(new Date()).format('YYYY-MM-DD HH:mm:ss Z'));
	arr.push(')');

	var line = arr.join(' ') + '\n';

	return line;
}

module.exports = CountMeIn;

