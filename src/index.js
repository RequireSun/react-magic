/**
 * Created by kelvinsun on 2017/6/27.
 */
const jsdom = require('jsdom').jsdom;
const window = jsdom().defaultView;

const createElement = tag => {
    return window.document.createElement(tag);
};

module.exports = require('./htmltojsx')(createElement);
