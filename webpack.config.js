const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
  		app: __dirname + '/src/docs/index.js',
  		vendor: ['react', 'react-dom', 'react-router-dom'],
  	},
    devServer: {
        contentBase: 'docs',
        open: true,
        compress: true,
        hot: true,
        inline: true
    },
    output: {
        filename: '[name].bundle.js',
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
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
    ]
};
