module.exports = () => ({
  name: "css-url-loader",
  configureWebpack: () => ({
    mode: process.env.NODE_ENV || "development",
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: ["url-loader"]
        }
      ]
    }
  })
});
