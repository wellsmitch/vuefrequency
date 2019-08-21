// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // "postcss-aspect-ratio-mini": {},
    // "postcss-write-svg": {utf8: false},
    // "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      // viewportWidth: 1280, // (Number) The width of the viewport.
      viewportWidth: 750, // (Number) The width of the viewport.
      viewportHeight: 752, // (Number) The height of the viewport.
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
      viewportUnit: 'vw', // (String) Expected units.
      fontViewportUnit: 'px', // TODO 字体仍然会转换？
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
      mediaQuery: false // (Boolean) Allow px to be converted in media queries.
    },
    // "postcss-viewport-units": {}, // vw兼容处理

  }
};
