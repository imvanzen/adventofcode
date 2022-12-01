#!node
"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
function readFile() {
    var fileContents = fs.readFileSync(path.join(__dirname, './a.input.txt'), {
        encoding: 'utf-8'
    });
    var curr = 0;
    var maxIndex = 0;
    var aggr = [0];
    var allCalories = fileContents.split('\r\n');
    for (var index in allCalories) {
        if (allCalories[index] === '') {
            curr++;
            aggr[curr] = 0;
        }
        else {
            aggr[curr] += parseInt(allCalories[index]);
        }
    }
    console.log("elf with the max number of calories", Math.max.apply(Math, aggr));
}
readFile();
