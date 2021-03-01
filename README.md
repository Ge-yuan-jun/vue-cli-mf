# module federation demo in vue-cli
##  description
@vue/cli version 5.0.0-alpha.5

### vue.config.js

```
chainWebpack: (config) => {
  config.optimization.delete('splitChunks')
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
  }])
},
```

### related issues in vue-cli

https://github.com/vuejs/vue-cli/issues/6318

### todo
It seems there is a conflict between splitChunks and webpack module federation(I am not an expert). 
After deleting splitChunks config, module federation works

maybe ask splitChunks maintainer ?
## successful demo link by using pure webpack

https://github.com/Ge-yuan-jun/pure-webpack5-mf-plugin