import { Configuration } from 'webpack';

import merge = require('webpack-merge');
import common = require('./webpack.config');
import ClosureCompiler = require('webpack-closure-compiler');

const prod: Configuration = {
}

export = merge(common, prod);
