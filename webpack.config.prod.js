const commonConfig = require('./webpack.config.common');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = webpackMerge(commonConfig, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new optimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['css/main.css', 'bundle.js'],
            append: false
        })
    ],
    optimization: {
        minimizer: [
            new uglifyJSPlugin({
                uglifyOptions: {
                    mangle: {
                        keep_fnames: true
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
})