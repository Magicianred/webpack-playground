const path = require('path');

module.exports = {
    // mode: "development",
    optimization: {
        minimize: false
    },
    watch: true,
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        // filename: "../build/application.js"
        // OR:
        // filename: "application.js",
        // path: "../build" // ERROR: path must be absolute
        // path: path.resolve(__dirname, 'build') // OK
    }
}