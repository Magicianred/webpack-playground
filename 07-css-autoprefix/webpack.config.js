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
            // {
            //     test: /\.scss$/i,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // }
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')({
                                        overrideBrowserslist: ['last 3 versions', 'ie >9']
                                    })
                                ]
                            },
                            // https://webpack.js.org/loaders/postcss-loader/#getting-started
                            // plugins: [
                            //     require('autoprefixer')({
                            //         overrideBrowserslist: ['last 3 versions', 'ie >9']
                            //     })    
                            // ]
                        }
                    },
                    'sass-loader'
                ],
            }

        ]
    }
}