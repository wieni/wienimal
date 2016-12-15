'use strict'

import gulp from 'gulp'
import browserSync from 'browser-sync'
import gulpLoadPlugins from 'gulp-load-plugins'
import * as conf from '../wienimal.config.js'

const $ = gulpLoadPlugins()

/**
 * The serve task will setup a live reload server.
 *
 * Usage: `gulp server`
 *
 * Note: Pass `--debug` to enable debug mode.
 */
gulp.task('serve', ['build'], () => {
  browserSync.init({
    proxy: `${conf.localUrl}`,
    port: 4000,
  })

  gulp.watch(conf.paths.styles.src, ['styles-reload'])
})
