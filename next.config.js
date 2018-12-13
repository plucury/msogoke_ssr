const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')
const isAnalyze = process.env.BUNDLE_ANALYZE === 'both'
const withPlugins = require('next-compose-plugins');
console.log('isAnalyze: ', isAnalyze)
if (isAnalyze) {
    module.exports = withPlugins([
        withSass,
        withCSS,
        withSourceMaps,
        [withBundleAnalyzer, {
            analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
            analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
            bundleAnalyzerConfig: {
                server: {
                    analyzerMode: 'static',
                    reportFilename: '../../bundles/server.html'
                },
                browser: {
                    analyzerMode: 'static',
                    reportFilename: '../bundles/client.html'
                }
            }
        }]
    ], {
        webpack: function (cfg) {
          const originalEntry = cfg.entry
          cfg.entry = async () => {
            const entries = await originalEntry()

            if (entries['main.js']) {
              entries['main.js'].unshift('./client/polyfills.js')
            }

            return entries
          }

          return cfg
        }
    })
} else {
  module.exports = withSass(withCSS(withSourceMaps({
        webpack: function (cfg) {
          const originalEntry = cfg.entry
          console.log(cfg, 'webpack logs')
          cfg.entry = async () => {
            const entries = await originalEntry()
            if (entries['main.js']) {
              entries['main.js'].unshift('./client/polyfills.js')
            }

            return entries
          }

          return cfg
        }
    })))
    // module.exports = withPlugins([
    //     withSass,
    //     withCSS,
    //     withSourceMaps
    // ], )
}
