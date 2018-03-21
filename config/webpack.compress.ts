import { Configuration } from 'webpack';

import merge = require('webpack-merge');
import prod = require('./webpack.prod');
import ClosureCompiler = require('webpack-closure-compiler');

const closure: Configuration = {
  plugins: [
    new ClosureCompiler({
      compiler: [
        '--language_in', 'ECMASCRIPT6',
        '--language_out', 'ECMASCRIPT5',
        '--create_source_map', 'dist/main.js.map',
        '--compilation_level', 'ADVANCED_OPTIMIZATIONS',
        '--js_externs', 'var WXEnvironment'
      ],
      // module_resolution: 'WEBPACK',
      concurrency: 3,
    })
  ]
}

export = merge(prod, closure);
