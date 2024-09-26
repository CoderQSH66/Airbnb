const CracoLessPlugin = require("craco-less")
const path = require("path")

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // less loader option
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#2378ff"
            },
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      api: path.resolve(__dirname, "./src/api")
    }
  }
}
