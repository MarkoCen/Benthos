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
            mangle: {
                toplevel: true,
                sort: true,
                eval: true,
                properties: true
            },
            compress: {
                warnings: false,
                properties: true,
                sequences: true,
                dead_code: true,
                conditionals: true,
                comparisons: true,
                evaluate: true,
                booleans: true,
                unused: true,
                loops: true,
                hoist_funs: true,
                cascade: true,
                if_return: true,
                join_vars: true,
                drop_debugger: true,
                unsafe: true,
                hoist_vars: true,
                negate_iife: true,
            },
            output: {
                space_colon: false,
                comments: function(node, comment) {
                    var text = comment.value;
                    var type = comment.type;
                    if (type == "comment2") {
                        // multiline comment
                        return /@copyright/i.test(text);
                    }
                }
            }
        })
    ]
};