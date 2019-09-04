# svrx-plugin-webpack simple example

A very simple example for showing the webpack **HMR** under svrx


**cli way**


```bash
svrx --webpack
```

**or programmatic way**

```js
node server.js
```

where in `server.js`

```js
const svrx = require('svrx');

svrx({
  plugins: [
    {
      name: 'webpack',
      options: {
        // you can pass string or object
        config: require('./webpack.config'),
      },
    },
  ],
}).start();

```

> then try editing the `client.js` to see HMR works
