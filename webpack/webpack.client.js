const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


const CopyPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.config');

const publicPath = '/';
const publicUrl = '';


module.exports = merge(baseConfig, {
    mode: 'production',
    entry: './src/client.js',
    output: {
        filename: 'js/[name].[hash].bundle.js',
        chunkFilename: 'js/[name].[hash].chunk.js',
        path: path.resolve(__dirname, '../dist/static'),
        publicPath
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimize: true,
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
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
        new CompressionPlugin(),
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: '../index.html',
            minify: {
                collapseWhitespace: true,
                minifyCSS: true,
            }
        }),
        new InterpolateHtmlPlugin({
            'PUBLIC_URL': publicUrl
        }),
        new CopyPlugin([
            {from: './public', to: '',  ignore: ['*.html']}
        ]),
        new CleanWebpackPlugin(),
        new StatsWriterPlugin({
            filename: '../stats.json',
            stats: {
                all: false,
                assets: true
            }
        }),
        new MiniCssExtractPlugin(
            {
                filename: 'css/[name].[contenthash].css',
                chunkFilename: 'css/[name].[contenthash].css',
            }
        )

    ],
    devtool: 'inline-source-map',
});