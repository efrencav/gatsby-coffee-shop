const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/efrencavazosimac/code/gatsby-coffee-shop/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/efrencavazosimac/code/gatsby-coffee-shop/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/efrencavazosimac/code/gatsby-coffee-shop/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/efrencavazosimac/code/gatsby-coffee-shop/src/pages/index.js")))
}

