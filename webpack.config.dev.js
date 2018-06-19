const commonConfig = require('./webpack.config.common');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
    mode: 'development',
    output:{
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './built',
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        hot: true,
        inline: true,
        stats: {
            color: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});