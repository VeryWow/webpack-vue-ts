import { Configuration } from 'webpack';

import merge = require('webpack-merge');
import common = require('./webpack.config');

const dev: Configuration = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
}

export = merge(common, dev);
