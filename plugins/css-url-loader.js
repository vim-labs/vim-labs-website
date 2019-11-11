module.exports = function(context, options) {
  return {
    name: "css-url-loader",
    configureWebpack() {
      return {
        mode: process.env.NODE_ENV || "development",
        module: {
          rules: [
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              use: ["url-loader"]
            }
          ]
        }
      };
    }
  };
};
