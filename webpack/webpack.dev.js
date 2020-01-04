const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const baseConfig = require('./webpack.config');

const publicPath = '/';
const publicUrl = '';

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: './src/client.js',
    output: {
        filename: 'js/[name].[hash].bundle.js',
        chunkFilename: 'js/[name].[hash].chunk.js',
        path: path.resolve(__dirname, '../public'),
        publicPath
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new InterpolateHtmlPlugin({
            'PUBLIC_URL': publicUrl
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './public',
        hot: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
});