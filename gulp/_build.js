'use strict'

import gulp from 'gulp'
import browserSync from 'browser-sync'
import * as conf from '../wienimal.config.js'

import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

/**
 * The build task will compile all the assets and minify them for
 * production ready use.
 *
 * Usage: `gulp build`
 *
 * Note: Pass `--debug` to enable debug mode.
 */
gulp.task(
  'build', [
    'styles',
  ]
)
