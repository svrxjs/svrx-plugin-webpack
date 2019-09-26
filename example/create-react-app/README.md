# How to integrated with create-react-app

> solution is moved form [svrx-docs#16](https://github.com/svrxjs/svrx-docs/issues/16)


## Steps

Initialize a project with [create-react-app](https://github.com/facebook/create-react-app):

```bash
npm init react-app my-app
```

### Via CLI

Create a file named `webpack.config.js` in root directory:

```js
const configFactory = require('react-scripts/config/webpack.config');

module.exports = configFactory('development');
```

And it works like a charm 🎉

```bash
svrx --webpack
```

### Via API

```js
const svrx = require('@svrx/svrx');

svrx({
  plugins: [
    {
      name: 'webpack',
      options: {
        config: require('react-scripts/config/webpack.config')('develoment')
      }
    }
  ]
}).start();
```

![image](https://user-images.githubusercontent.com/2230882/65511690-5299f800-df0a-11e9-95ca-ff88cd65b4ef.png)

You can also combine with others [plugins](https://github.com/search?p=1&q=svrx-plugin&type=Repositories) to get powerful dev experience.
