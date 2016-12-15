'use strict'

import fs from 'fs'
import gulp from 'gulp'

/**
 *  Load all gulp tasks.
 */
fs.readdirSync('./gulp').filter(function(file) {
  return (/\.(js)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});
