module.exports = function (config) {
  config.addPassthroughCopy('src/styles');
  config.addPassthroughCopy('src/assets');
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy('src/index.js');
  config.addPassthroughCopy('src/scripts');
  config.addPassthroughCopy({ 'src/other/.htmlnanorc': '/.htmlnanorc' });
  config.addPassthroughCopy('src/other');
  config.addPassthroughCopy('src/site.webmanifest');

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: 'includes',
      layouts: 'layouts',
      data: 'global',
    },
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    templateFormats: ['md', 'html', 'njk', 'jpg', 'png', 'svg'],
  };
};
