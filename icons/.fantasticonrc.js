'use strict'

module.exports = {
  inputDir: './svg',
  outputDir: './',
  fontTypes: ['woff2', 'woff'],
  assetTypes: ['css', 'scss', 'json'],
  name: 'ni-icons',
  codepoints: {},
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
    json: './icons.json',
    css: './icons.css',
    scss: './icons.scss',
    woff: './fonts/ni-icons.woff',
    woff2: './fonts/ni-icons.woff2'
  }
}
