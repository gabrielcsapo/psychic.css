const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
  		app: __dirname + '/src/docs/index.js',
  		vendor: ['react', 'react-dom', 'react-router-dom'],
  	},
    devServer: {
        contentBase: 'docs',
        hot: true,
        inline: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname + '/docs')
    },
    module: {
      rules: [{
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['env', 'react']
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
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ]
};
