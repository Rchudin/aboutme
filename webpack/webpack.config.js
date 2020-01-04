module.exports = {
    target: "web",
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            ['@babel/env', { targets: { browsers: ['last 7 versions'] } }]
                        ]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico|txt)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'media',
                }
            },
        ]
    }
};