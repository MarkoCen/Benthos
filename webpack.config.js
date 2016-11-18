'use strict';

const webpack = require('webpack');

module.exports = {
    entry: {
        "benthos": "./build/benthos.js",
        "benthos.min": "./build/benthos.js",
    },
    output: {
        filename: '[name].js',
        path: 'dist/',
        sourceMapFilename: '[file].map',
        library: 'benthos',
        libraryTarget: 'umd'
    },
    devtool: "source-map",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            mangle: true
        })
    ]
};