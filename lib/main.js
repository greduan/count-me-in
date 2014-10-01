// the object we'll be exporting through module.exports
var obj = {};

obj.getLastNumber = function (fileContents) {
	var splitFile = fileContents.split("\n");

	splitFile.pop(); // assume there is an extra \n

	var lastLine = splitFile.pop();

	var number = lastLine.match(/^\d+/);

	return parseInt(number);
};

module.exports = obj;
