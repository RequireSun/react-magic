/**
 * Created by kelvinsun on 2017/6/27.
 */
const createElement = function (tag) {
    return document.createElement(tag);
};
module.exports = require('./htmltojsx')(createElement);
