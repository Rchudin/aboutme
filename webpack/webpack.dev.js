const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const ip = require('ip');
const opn = require('opn');
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
                exclude: /\.module\.css$/i,
                use: ['style-loader', 'css-loader' ],
            },
            {
                test: /\.module\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        },
                    },
                ],
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
        host: '0.0.0.0',
        port: 3200,
        contentBase: './public',
        hot: true,
        historyApiFallback: true,
        onListening: (server) => {
            const {port} = server.listeningApp.address();

            console.log(`Listening http://${ip.address()}:${port}`);
            console.log(`Listening http://127.0.0.1:${port}`);

            opn(`http://127.0.0.1:${port}`)
        },
        proxy: {
            "/api/sw/**": {
                target: 'http://127.0.0.1:7898/',
                secure: false,
            },
            // "/api/sparks/**": {
            //     target: 'http://127.0.0.1:5000/',
            //     secure: false,
            // },
        }
    },
    devtool: 'inline-source-map',
});
