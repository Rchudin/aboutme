const path = require('path');
const webpack = require('webpack');
const ip = require('ip');
const opn = require('opn');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const baseConfig = require('./webpack.config');
const CopyPlugin = require('copy-webpack-plugin');

const publicPath = '/';
const publicUrl = '';

module.exports = merge(baseConfig, {
    mode: 'development',
    entry: './src/client.tsx',
    output: {
        filename: 'js/[name].[hash].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: 'js/[name].[hash].chunk.js',
        publicPath: publicPath
    },
    devtool: 'inline-source-map',
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
            template: './src/assets/public/index.html',
            filename: 'index.html',
            favicon: './src/assets/public/favicon.ico'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
        // new CopyPlugin([
        //     {from: './public', to: '', ignore: ['*.html']}
        // ]),
        // new InterpolateHtmlPlugin({
        //     // 'PUBLIC_URL': publicUrl
        // }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: '0.0.0.0',
        port: 3100,
        contentBase: './dist',
        hot: true,
        historyApiFallback: true,
        onListening: (server) => {
            const {port} = server.listeningApp.address();

            console.log(`Listening http://${ip.address()}:${port}`);
            console.log(`Listening http://127.0.0.1:${port}`);

            opn(`http://127.0.0.1:${port}`)
        },
        proxy: {
            "/api/feedback": {
                target: 'http://127.0.0.1:3911/',
                secure: false,
            },
        }
    },
});
