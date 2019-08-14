# svrx-plugin-webpack

[![Greenkeeper badge](https://badges.greenkeeper.io/x-orpheus/svrx-plugin-webpack.svg)](https://greenkeeper.io/)

webpack plugin for [svrx](https://github.com/x-orpheus/svrx)

## Usage

> **please confirm you have [installed svrx](https://github.com/x-orpheus/svrx) already**


### cli

```bash
svrx -p webpack?hot=false
```

### manual

```js
const svrx = require('svrx');

svrx({ plugins: ['webpack'] }).start();
```

**with options**

```js

svrx({
    plugins: [{
        name: 'webpack',
        options: {
            hot: false
        }
    }]
}).start();
```

## Options

### **file \[String]:** 

webpack config file, default is `$root/webpack.config.js` (`$root` means `options.root`)

### **hot \[Boolean]:** 

Enable webpack Hot Module Replacement feature, default is `true`

### **client \[Object]:**

options can be passed to the client by adding querystring parameters to the path in the webpack config

see [webpack-hot-middleware#client](https://github.com/webpack-contrib/webpack-hot-middleware#client) for detail

for example, options `{timeout: 3000}` will been encode as `webpack-hot-middleware/client?timeout=3000` 

### **path \[String]:**

The path which the middleware will serve the event stream on, default is `/__webpack_hmr`


## Example

- [simple](https://github.com/x-orpheus/svrx-plugin-webpack/tree/master/example/simple)
- [react-loader](https://github.com/x-orpheus/svrx-plugin-webpack/tree/master/example/react-loader)

## FAQ

