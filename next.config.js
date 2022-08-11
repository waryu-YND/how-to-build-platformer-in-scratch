const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
console.log("urlPrefix::: " + urlPrefix);

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
};