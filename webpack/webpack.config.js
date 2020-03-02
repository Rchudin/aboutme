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
                test: /\.(png|svg|jpg|gif|ico|txt|webp)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                }
            },
        ]
    }
};
