var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'MathCalc', 'coolMethod', [arg0]);
// };

module.exports.add = function (arg0, success, error) {
    exec(success, error, 'MathCalc', 'add', [arg0]);
};

module.exports.substract = function (arg0, success, error) {
    exec(success, error, 'MathCalc', 'substract', [arg0]);
};