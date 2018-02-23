const path = require('path');

module.exports = {
  entry: './example/react-setup.jsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.[t,j]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: "test.tsconfig.json"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'example'),
    filename: 'bundle.js'
  }
}
