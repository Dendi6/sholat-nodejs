const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        home:'./src/index.js',
        surah:'./src/surah.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html"),
            filename: "index.html",
            chunks:['home']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/surah.html"),
            filename: "surah.html",
            chunks:['surah']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/styles/view/nav.html"),
            filename: "styles/view/nav.html",
            chunks:[]
        }),
        new workboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [{
              urlPattern: new RegExp('https://api.banghasan.com'),
              handler: 'StaleWhileRevalidate'
            }]
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/images'),
                    to: path.resolve(__dirname, 'dist/images')
                }
            ]
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/styles/pages'),
                    to: path.resolve(__dirname, 'dist/styles/pages')
                }
            ]
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/manifest.json'),
                    to: path.resolve(__dirname, 'dist/manifest.json')
                }
            ]
        })
    ]
};