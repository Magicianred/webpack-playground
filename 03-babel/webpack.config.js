module.exports = {
    // mode: "development",
    watch: true,
    optimization: {
        minimize: false
    },
    entry: "./src/index.js",
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    } 
}