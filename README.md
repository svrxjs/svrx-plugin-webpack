# svrx-plugin-webpack

[![svrx](https://img.shields.io/badge/svrx-plugin-%23ff69b4?style=flat-square)](https://svrx.io/)
[![npm](https://img.shields.io/npm/v/svrx-plugin-webpack.svg?style=flat-square)](https://www.npmjs.com/package/svrx-plugin-webpack)

webpack plugin for [svrx](https://github.com/x-orpheus/svrx)

## Usage

> Please make sure that you have installed [svrx](https://svrx.io/) already.


### Via CLI

```bash
svrx -p webpack?hot=false
```

### Via API

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

### **config \[String|Object]:** 

webpack config file or object, default is `$root/webpack.config.js` (`$root` means `options.root`)

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
- [integrated-with-create-react-app](https://github.com/x-orpheus/svrx-plugin-webpack/tree/master/example/create-react-app)

## License

MIT