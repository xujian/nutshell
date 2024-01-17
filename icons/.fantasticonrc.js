'use strict'

const codepoints = require('./output/icons.json')

module.exports = {
  inputDir: './svg',
  outputDir: './output',
  fontTypes: ['woff2', 'woff'],
  assetTypes: ['css', 'scss', 'json'],
  name: 'ni-icons',
  codepoints,
  prefix: 'ni',
  selector: '.ni',
  fontsUrl: './fonts',
  formatOptions: {
    json: {
      indent: 2
    }
  },
  // Use our custom Handlebars templates
  templates: {
    css: './build/font/css.hbs',
    scss: './build/font/scss.hbs'
  },
  pathOptions: {
    json: './output/icons.json',
    css: './output/icons.css',
    scss: './output/icons.scss',
    woff: './output/fonts/icons.woff',
    woff2: './output/fonts/icons.woff2'
  }
}
