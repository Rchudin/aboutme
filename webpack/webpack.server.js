const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.config');


module.exports = merge(baseConfig, {
    mode: 'production',
    target: 'node',
    entry: './src/server.js',
    externals: [webpackNodeExternals()],
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                SSR: JSON.stringify(true)
            }
        }),
        new MiniCssExtractPlugin(
            {
                filename: 'css/[name].[contenthash].css',
                chunkFilename: 'css/[name].[contenthash].css',
            }
        )
    ],
});