module.exports = {
    // mode: "development",
    watch: true,
    // optimization: {
    //     minimize: false
    // },
    devtool: "cheap-module-eval-source-map",
    entry: "./src/index.js",
    output: {
        filename: "main.js"
    }
}