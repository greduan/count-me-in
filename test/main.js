var test = require('tape');
var main = require('..');

test('main.getLastNumber: make sure it gets the correct number', function (t) {
    'use strict';

    t.plan(4);

    var exampleFile1, exampleFile2, result1, result2;

    exampleFile1  = '1.\n2.\n3.\n6.\n';
    exampleFile2 = '1.\n2.\n3.\n6.';

    result1 = main.getLastNumber(exampleFile1);
    result2 = main.getLastNumber(exampleFile2);

    // make sure they're numbers and they return the right numbers
    t.equal(typeof result1, 'number');
    t.equal(result1, 6);

    t.equal(typeof result2, 'number');
    t.equal(result2, 6);

    t.end();
});

test('main.newNumber: make sure it returns the correct num in several occassions', function (t) {
    'use strict';

    t.plan(8);

    var exampleFile, lastNumber, result1, result2, result3, result4;

    exampleFile = '1.\n2.\n';
    lastNumber = main.getLastNumber(exampleFile);

    result1 = main.newNumber(lastNumber); // default settings
    result2 = main.newNumber(lastNumber, 2); // add 2
    result3 = main.newNumber(lastNumber, true); // decrement 1
    result4 = main.newNumber(lastNumber, 2, true); // decrement 2

    t.equal(typeof result1, 'number');
    t.equal(result1, 3);
    t.equal(typeof result2, 'number');
    t.equal(result2, 4);
    t.equal(typeof result3, 'number');
    t.equal(result3, 1);
    t.equal(typeof result4, 'number');
    t.equal(result4, 0);

    t.end();
});
