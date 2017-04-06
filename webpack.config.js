const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/docs/index.js',
    devServer: {
        contentBase: 'docs',
        hot: true,
        inline: true
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname + '/docs')
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.styl$/,
                loaders: ['style-loader', 'css-loader', 'stylus-loader']
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
