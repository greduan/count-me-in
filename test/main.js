var test = require("tape");
var main = require(__dirname + "/../lib/main.js");

test("main.getLastNumber: make sure it gets the correct number", function (t) {
	t.plan(2);

	var exampleFile1 = "1.\n2.\n3.\n6.\n";
	// var exampleFile2 = "1.\n2.\n3.\n6.";

	var result1 = main.getLastNumber(exampleFile1);
	// var result2 = main.getLastNumber(exampleFile2);

	// make sure they're numbers and they return the right numbers
	t.equal(typeof result1, "number");
	t.equal(result1, 6);

	// t.equal(typeof result2, "number");
	// t.equal(result2, 6);
});
