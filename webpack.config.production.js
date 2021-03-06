/**
 * Created by RequireSun on 2016/12/7.
 */
'use strict';

const path       = require('path');
const webpack    = require('webpack');
const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

config.output = Object.assign(config.output, {
    path    : path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
});

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
        // IN_BROWSER: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
        warning: false,
    })
);

module.exports = config;
