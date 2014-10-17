// the object we'll be exporting through module.exports
var obj = {};

obj.getLastNumber = function (fileContents) {
    'use strict';

    var splitFile, lastLine, number;

    splitFile = (fileContents === 'undefined')
        ? ''
        : fileContents.split('\n');

    // add support for different cases. with and without \n, etc.
    if (splitFile.length <= 1) {
        lastLine = '0.';
    } else if (splitFile[splitFile.length - 1] === '') {
        lastLine = splitFile[splitFile.length - 2];
    } else {
        lastLine = splitFile[splitFile.length - 1];
    }

    number = lastLine.match(/^\d+/)[0];

    return parseInt(number, 10);
};

obj.newNumber = function (prevNum, newNum, reverse) {
    'use strict';

    var result;

    // the logic that determines some argument stuff, stuff changes depending
    // on the amount of args this gets passed
    if (arguments.length === 1) {
        newNum = 1;
        reverse = false;
    }
    if (arguments.length === 2) {
        if (typeof newNum === 'number') {
            newNum = parseInt(newNum, 10);
            reverse = false;
        }
        if (typeof newNum === 'boolean') {
            newNum = 1;
            reverse = newNum;
        }
    }
    if (arguments.length === 3) {
        newNum = parseInt(newNum, 10);
    }

    // should we decrement?
    if (reverse) {
        result = prevNum - newNum;
    } else {
        result = prevNum + newNum;
    }

    // just some safety
    if (result <= 0 || isNaN(result)) {
        result = 0;
    }

    return result;
};

obj.newLine = function (num) {
    'use strict';

    return num + '. (' + new Date() + ')\n';
};

module.exports = obj;
