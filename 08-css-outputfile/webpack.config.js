const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    // mode: "development",
    watch: true,
    // optimization: {
    //     minimize: false
    // },
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