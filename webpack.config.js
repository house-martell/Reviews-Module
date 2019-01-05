var path = require('path');
const combineLoaders = require('webpack-combine-loaders');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/,
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        ])
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg|gif)$/,
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

// const path = require('path');


// module.exports = {
//   mode: 'development',
//   entry: path.resolve(__dirname, './client/src/'),
//   output: {
//     path: path.resolve(__dirname, './client/dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         loader: 'babel-loader',
//         test: /\.js[x]?/,
//         exclude: /node_modules/,
//         options: {
//           presets: ['@babel/preset-env', '@babel/preset-react']
//         }
//       },
//       {
//         test: /\.css$/,
//         loader: combineLoaders([
//           {
//             loader: 'style-loader'
//           }, {
//             loader: 'css-loader',
//             query: {
//               modules: true,
//               localIdentName: '[name]__[local]___[hash:base64:5]'
//             }
//           }
//         ])
//       },
//       { 
//         test: /\.(png|woff|woff2|eot|ttf|svg)$/,
//         loader: 'url-loader?limit=100000' 
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   }
// };
