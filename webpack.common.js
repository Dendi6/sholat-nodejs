const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const workboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        home: './src/index.js',
        view: './src/view.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle/[name].bundle.js"
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
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/view.html"),
            filename: "view.html",
            chunks: ['view']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/app/view/nav.html"),
            filename: "app/view/nav.html",
            chunks: []
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
                    from: path.resolve(__dirname, 'src/app/pages'),
                    to: path.resolve(__dirname, 'dist/app/pages')
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