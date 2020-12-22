const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackNodeExternals = require('webpack-node-externals');
const CompressionPlugin = require("compression-webpack-plugin");
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const baseConfig = require('./webpack.config');
const prodConfig = require('./webpack.prod');


const publicPath = '/';

module.exports = [
    merge(baseConfig, prodConfig, {
        mode: 'production',
        entry: './src/client.tsx',
        output: {
            filename: 'js/[name].[fullhash].bundle.js',
            chunkFilename: 'js/[name].[fullhash].chunk.js',
            path: path.resolve(__dirname, '../dist/static'),
            publicPath: publicPath
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                    SSR: JSON.stringify(true)
                }
            }),
            new CompressionPlugin(),
            new MiniCssExtractPlugin(
                {
                    filename: 'css/[name].[fullhash].css',
                    chunkFilename: 'css/[name].[fullhash].css',
                }
            ),
            new StatsWriterPlugin({
                filename: '../stats.json',
                stats: {
                    all: false,
                    assets: true,
                    chunks: true,
                }
            }),
            new CopyPlugin({
                patterns: [
                    { from: 'src/assets/public', to: '', globOptions: { ignore: ["**/*.html"] } }
                ]
            }),
        ],
    }),
    merge(baseConfig, prodConfig, {
        mode: 'production',
        target: 'node',
        entry: './src/server.tsx',
        externals: [webpackNodeExternals()],
        output: {
            filename: 'server.js',
            libraryTarget: 'commonjs2',
            path: path.resolve(__dirname, '../dist'),
            publicPath: publicPath
        },
        plugins: [
            new CleanWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                    SSR: JSON.stringify(true),
                    SERVER: JSON.stringify(true)
                }
            }),
            new CompressionPlugin(),
            new MiniCssExtractPlugin(
                {
                    filename: 'css/[name].[fullhash].css',
                    chunkFilename: 'css/[name].[fullhash].css',
                }
            )
        ],
    })
];
