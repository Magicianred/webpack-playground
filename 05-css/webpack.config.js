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
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
}