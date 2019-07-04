const path = __dirname;
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
    entry: {
        auaha: path + '/src/index.js',
        vendor: ['jquery', 'whatwg-fetch', 'axios']
    },
    output: {
        path: path + '/opencode/js/',
        filename: "[name].js"
    },
    plugins: [
        new MinifyPlugin()
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                plugins: ["transform-runtime", "react-html-attrs"],
                presets: ['react', ['es2015', {modules: false}]]
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.styl$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader?sourceMap!postcss-loader?sourceMap="inline"!stylus-loader?paths=src'
            }
        ]
    }
}