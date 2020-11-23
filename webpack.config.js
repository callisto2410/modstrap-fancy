const path = require('path');
const webpack = require('webpack');

module.exports = {
    performance: {
        hints: false
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
    entry: path.resolve(__dirname, 'demo', 'src', 'index.ts'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'demo', 'dist'),
    },
    devtool: 'source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            url: false,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['autoprefixer'],
                                ],
                            },
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.loader.json'
                    }
                }],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
