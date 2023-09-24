"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
while (true) {
    var input = readline_sync_1["default"].question('Who owes you and how much?');
    console.log('The input is', input);
    if (input == 'walang utang') {
        break;
    }
}
