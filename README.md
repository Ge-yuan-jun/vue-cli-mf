# module federation demo in vue-cli

## the demo failed, and cannot find out why

##  description
@vue/cli version 5.0.0-alpha.5

### vue.config.js

```
publicPath: 'http://localhost:8082/',

chainWebpack: (config) => {
  /* module federation plugin import */
  config
    .plugin('module-federation-plugin')
    .use(require('webpack').container.ModuleFederationPlugin, [{
      name: "layout",
      filename: "remoteEntry.js",
      remotes: {
        home: "home@http://localhost:8081/remoteEntry.js",
      },
      exposes: {},
      shared: {
        "vue": {
          eager: true,
          singleton: true,
          requiredVersion: deps.vue,
        }
      }
  }]).before('vue-loader')
}
```

### trials

Q: Maybe it's the problem of the order of plugins ?
A: I have used webpack chain `.before`, and I have inspect the webpack config by use `vue inspect >output.js`, still not work.

Q: Maybe it's aproblem with webpack version ? 
A: I have upload a demo with pure webpack config, the webpack package version equals this repo, here is the url link(https://github.com/Ge-yuan-jun/pure-webpack5-mf-plugin), So, I think maybe vue-cli don't support the feature ?

### need help

Maybe the maintainer of vue-cli can help find out the reason ?

## successful demo link by using pure webpack

https://github.com/Ge-yuan-jun/pure-webpack5-mf-plugin