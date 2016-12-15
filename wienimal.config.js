'use strict'

import { argv } from 'yargs'

export const localUrl = 'localhost:8004'

/* Check if debug mode is enabled */
export const debugMode = argv.debug;

/* The paths of the different assets */
export const paths = {
  styles: {
    src: `scss/**/*.scss`,
    dest: `css`
  }
}
