#!/usr/bin/env node

// outside stuff
var docopt = require('docopt').docopt;
var pathUtil = require('path');
var fsUtil = require('node-fs-extra');

// inside stuff
var main = require('..');

var doc = 'Usage: cmi [-d DIR] [-r] NAME [(NUM | --set NUM)]' +
    '\n' +
    '\nOptions:' +
    '\n  -h --help     Show this screen.' +
    '\n  -v --version  Output software version.' +
    '\n  -r            NUM decreases the counter instead of increasing it.' +
    '\n  --set NUM     When used it sets the count to NUM.' +
    '\n  -d DIR        Directory where to store counter(s) relative to current directory. [default: .cmi]';

var cli = docopt(doc, { help: true, version: '0.4.0' });
//return console.log(cli);

// handle some default values for the CLI

var file = pathUtil.resolve(cli['-d'], cli.NAME);
cli.NUM = cli.NUM || 1;

// some util functions

var appendStrToFile = function (filePath, str, callback) {
    'use strict';

    fsUtil.appendFile(filePath, str, function (err) {
        if (err) { throw err; }
        return callback();
    });
};

var readFile = function (filePath, callback) {
    'use strict';

    fsUtil.createFile(filePath, function (err) {
        if (err) { throw err; }

        fsUtil.readFile(filePath, { encoding: 'utf8' }, function (err, contents) {
            if (err) { throw err; }

            return callback(contents);
        });
    });
};

// the CLI logic

if (cli['--set']) {
    readFile(file, function () {
        'use strict';

        var newLine = main.newLine(cli['--set']);

        appendStrToFile(file, newLine, function () {
            return console.log(newLine);
        });
    });
} else {
    readFile(file, function (data) {
        'use strict';

        var lastNum, newNum, newLine;
        lastNum = main.getLastNumber(data);
        newNum = main.newNumber(lastNum, cli.NUM, cli['-r']);
        newLine = main.newLine(newNum);

        appendStrToFile(file, newLine, function () {
            return console.log(newLine);
        });
    });
}
