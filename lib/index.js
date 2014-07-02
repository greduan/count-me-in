var fs = require('fs');
var moment = require('moment');

var CountMeIn = {};
// read file -> .readLastLine -> .add -> .makeLine -> write file

// Read last line of input and figure out what the integer is, return int
CountMeIn.readLastLine = function(str){
	var arr = str.split('\n');
	arr.pop(); // On a sane system, last entry always empty

	var lastLine = arr.pop();

	var int = lastLine.match(/[^\.]+/)[0];

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
	if (int < 0)
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

	var line = arr.join(' ');

	return line;
}

module.exports = CountMeIn;

var str = '1' +
	'\n2' +
	'\n3' +
	'\n4' +
	'\n5' +
	'\n6. ( Some date string yo )' +
	'\n52828. stuff\n';
var one = CountMeIn.readLastLine(str);
var two = CountMeIn.add(one, 2);
var three = CountMeIn.makeLine(two);

console.log(three);


