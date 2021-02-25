const deps = require('./package.json').dependencies

module.exports = {
  publicPath: 'http://localhost:8081/',

  chainWebpack: (config) => {
    /* module federation plugin import */
    config
      .plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [{
        name: "home",
        filename: "remoteEntry.js",
        remotes: {
          layout: "layout@http://localhost:8082/remoteEntry.js",
        },
        exposes: {
          './HelloWorld': './src/components/HelloWorld.vue'
        },
        shared: {
          "vue": {
            eager: true,
            singleton: true,
            requiredVersion: deps.vue,
          }
        }
    }]).before('vue-loader')
  },

  devServer: {
    port: 8081,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    }
  }
}