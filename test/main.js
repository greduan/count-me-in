var test = require("tape");
var main = require("..");

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

	t.end();
});

test("main.newNumber: make sure it returns the correct num in several occassions", function (t) {
	t.plan(8);

	var exampleFile = "1.\n2.\n";
	var lastNumber = main.getLastNumber(exampleFile);

	var result1 = main.newNumber(lastNumber); // default settings
	var result2 = main.newNumber(lastNumber, 2); // add 2
	var result3 = main.newNumber(lastNumber, true); // decrement 1
	var result4 = main.newNumber(lastNumber, 2, true); // decrement 2

	t.equal(typeof result1, "number");
	t.equal(result1, 3);
	t.equal(typeof result2, "number");
	t.equal(result2, 4);
	t.equal(typeof result3, "number");
	t.equal(result3, 1);
	t.equal(typeof result4, "number");
	t.equal(result4, 0);

	t.end();
});

// TODO add tests for obj.newLine()
