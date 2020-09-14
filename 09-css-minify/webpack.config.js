const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require('terser-webpack-plugin'); // built-in
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    // mode: "development",
    watch: true,
    // optimization: {
    //     minimize: false
    // },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    entry: "./src/index.js",
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader', 
                    'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        })
    ]
}