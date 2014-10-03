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
	if (arguments.length === 1) {
		var newNum = 1;
		var reverse = false;
	}
	if (arguments.length === 2) {
		if (typeof arguments[1] === "number") {
			var newNum = arguments[1];
			var reverse = false;
		}
		if (typeof arguments[1] === "boolean") {
			var newNum = 1;
			var reverse = arguments[1];
		}
	}
	if (arguments.length === 3) {
		var newNum = arguments[1];
		var reverse = arguments[2];
	}
	// nothing needs to be done if there's 3 arguments provided

	if (reverse) {
		var result = prevNum - newNum;
	} else {
		var result = prevNum + newNum;
	}

	return result;
};

console.log(obj.newNumber(1, true));

module.exports = obj;
