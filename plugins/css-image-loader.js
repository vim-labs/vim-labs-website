/*
   This plugin inlines small (<8KB) images and copies larger media.

   Docusaurus lifecycle APIs: configureWebpack
   https://v2.docusaurus.io/docs/lifecycle-apis/

   Webpack loaders: url-loader:
   https://webpack.js.org/loaders/url-loader/

   Webpack loaders: file-loader:
   https://webpack.js.org/loaders/file-loader/
*/

module.exports = () => ({
  name: "css-image-loader",
  configureWebpack: () => ({
    mode: process.env.NODE_ENV || "development", // Use environment to define the Webpack optimization mode.
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g|svg)$/i, // Use this plugin on .gif, .png, .jpg, .jpeg, and .svg files.
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 8192, // Inline image files < 8KB as base64-encoded strings using url-loader.
                fallback: "file-loader" // Copy larger images into the build folder using file-loader.
              }
            }
          ]
        }
      ]
    }
  })
});
