let HtmlWebpackPlugin = require('html-webpack-plugin')
let path = require('path')
module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index.js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        contentBase: './public'
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
            }
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}