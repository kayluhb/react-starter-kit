require('@babel/register');

const config = require('../tools/webpack.config.js').default[0];

module.exports = {
  plugins: config.plugins.filter(plugin =>
    ['DefinePlugin', 'ProvidePlugin', 'ExtractTextPlugin'].includes(
      plugin.constructor.name,
    ),
  ),
  devtool: 'source-map',
  resolve: config.resolve,
  module: {
    loaders: config.module.loaders,
    rules: config.module.rules,
  },
};
