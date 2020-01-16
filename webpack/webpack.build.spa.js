const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


const baseConfig = require('./webpack.config');
const prodConfig = require('./webpack.prod');


const publicPath = '/';
const publicUrl = '';


module.exports = merge(baseConfig, prodConfig, {
    entry: './src/client.js',
    output: {
        filename: 'js/[name].[hash].bundle.js',
        chunkFilename: 'js/[name].[hash].chunk.js',
        path: path.resolve(__dirname, '../dist/static'),
        publicPath
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new CompressionPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
            }
        }),
        new InterpolateHtmlPlugin({
            'PUBLIC_URL': publicUrl
        }),
        new CopyPlugin([
            {from: './public', to: '', ignore: ['*.html']}
        ]),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: 'css/[name].[hash].css',
                chunkFilename: 'css/[name].[hash].css',
            }
        )
    ],
});