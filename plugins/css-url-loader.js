module.exports = function(context, options) {
  return {
    name: "css-url-loader",
    configureWebpack(config, isServer) {
      return {
        mode: "development",
        module: {
          rules: [
            {
              test: /\.(gif|png|jpe?g|svg)$/i,
              exclude: /\.(mdx?)$/i,
              use: ["url-loader"]
            }
          ]
        }
      };
    }
  };
};
