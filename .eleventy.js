module.exports = function () {
  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: [
      'html',
      'md',
      'njk'
    ],
    passthroughFileCopy: true
  }
}
