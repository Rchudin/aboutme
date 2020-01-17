const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpackNodeExternals = require('webpack-node-externals');


const baseConfig = require('./webpack.config');
const prodConfig = require('./webpack.prod');


const publicPath = '/';



module.exports = [
    merge(baseConfig, prodConfig, {
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
                    NODE_ENV: JSON.stringify('production'),
                    SSR: JSON.stringify(true)
                }
            }),
            new CompressionPlugin(),
            new StatsWriterPlugin({
                filename: '../stats.json',
                stats: {
                    all: false,
                    assets: true
                }
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
    }),
    merge(baseConfig, prodConfig, {
        target: 'node',
        entry: './src/server.js',
        externals: [webpackNodeExternals()],
        output: {
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            path: path.resolve(__dirname, '../dist'),
            publicPath
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                    SSR: JSON.stringify(true),
                    SERVER: JSON.stringify(true)
                }
            }),
            new MiniCssExtractPlugin(
                {
                    filename: 'css/[name].[hash].css',
                    chunkFilename: 'css/[name].[hash].css',
                }
            )
        ],
    })
];