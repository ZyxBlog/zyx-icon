const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ROOT_PATH = path.resolve(__dirname, '../')

module.exports = {
    mode: 'development',
    entry: {
        demo: path.resolve(ROOT_PATH, 'examples/index.js')
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../static'),
        filename: 'js/[name].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(less|css)$/,
                loaders: [
                    MiniCssExtractPlugin,
                    'css-loader',
                    'less-loader',
                ]
            },
            // {
            //     test: /\.ejs$/,
            //     loader: 'raw-loader',
            // },
            {
                test: /\.(jpe?g|png|gif|svg|ttf|woff|eot)$/i,
                loaders: ['url-loader?limit=1500&name=css/fonts/[name].[ext]']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'views/index.ejs',
            template: 'raw-loader!examples/views/index.ejs',
            chunks: ['demo'],
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}