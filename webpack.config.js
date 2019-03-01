module.exports = {
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: "babel",
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: "vue"
        },
        {
          test: /\.s[a|c]ss$/,
          loader: "style!css!sass"
        }
      ]
    },
    vue: {
      loaders: {
        scss: "style!css!sass"
      }
    },
    dev: {
      proxyTable: {
        // proxy all requests starting with /api to jsonplaceholder
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        }
      }
    }
  };