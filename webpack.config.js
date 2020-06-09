var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  // target: 'node',
  // node: {
  //   fs: 'empty',
  // },
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};



// module.exports = {
//   entry: '${SRC_DIR}/index.jsx',
//   output: {
//     path: DIST_DIR
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         loader: 'babel',
//         exclude: /node_modules/,
//         query: {
//           cacheDirectory: true,
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// }