module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: [/\.jsx?$/,/\.css$/i]
        exclude: /node_modules/,
        loader: ['babel-loader',"style-loader", "css-loader" ]
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      }
    ]
  }
}
