const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ROOT_PATH = path.resolve(__dirname, '../src')
const entry_path = path.resolve(ROOT_PATH, './icon.js')

module.exports = {
    mode: 'development',
    entry: {
        icon: entry_path
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'zyx-icon.js',
    },
    module: {
        rules: [
            {
                test: /icon.(js|json)$/,
                loaders: [
                    MiniCssExtractPlugin,
                    'css-loader',
                    {
                        loader: 'webfonts-loader',
                        options: {
                            publicPath: "./",
                            fileName: '[fontname].[ext]' 
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ]
}