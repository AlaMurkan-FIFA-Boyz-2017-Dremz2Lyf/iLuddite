// this object is the common configuration for webpack whether it is
// used in production or development
const commonConfig = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './server/public/'
  },
  loaders: [

  ]
}

const devConfig = {
  devtool: 'source-maps',
  devServer: {
    inline: true,
    historyApiFallback: true
    contentBase: './server/public/'
  }
}

// this is how we can see if webpack should be used in production mode
// or if it should be used in a developer mode
// if TARGET is 'build' -> production mode
// if TARGET i  'dev' -> development mode
const TARGET = process.env.npm_lifecycle_event;
if (TARGET === 'dev') {

} 

