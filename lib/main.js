// the object we'll be exporting through module.exports
var obj = {};

obj.getLastNumber = function (fileContents) {
	var splitFile = fileContents.split("\n");

	splitFile.pop(); // assume there is an extra \n

	var lastLine = splitFile.pop();

	var number = lastLine.match(/^\d+/);

	return parseInt(number);
};

obj.newNumber = function (prevNum, newNum, reverse) {
	// the logic that determines some argument stuff, stuff changes depending
	// on the amount of args this gets passed
	if (arguments.length === 1) {
		var newNum = 1;
		var reverse = false;
	}
	if (arguments.length === 2) {
		if (typeof arguments[1] === "number") {
			var newNum = parseInt(arguments[1]);
			var reverse = false;
		}
		if (typeof arguments[1] === "boolean") {
			var newNum = 1;
			var reverse = arguments[1];
		}
	}
	if (arguments.length === 3) {
		var newNum = parseInt(arguments[1]);
		var reverse = arguments[2];
	}

	if (reverse) {
		var result = prevNum - newNum;
	} else {
		var result = prevNum + newNum;
	}

	// just some safety
	if (result <= 0 || isNaN(int)) {
		result = 0;
	}

	return result;
};

obj.newLine = function (num) {
	return num + ". (" + new Date() + ")";
};

module.exports = obj;
