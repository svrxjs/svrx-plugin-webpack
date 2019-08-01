# Example with react-loader

React Loader Example for Svrx


### **cli way**

```bash
svrx --webpack?file=custom.webpack.config.js
```

> default file is `webpack.config.js`

you can also keep the param in `.svrxrc` file

### **or programmatic way**

```js
node server.js
```

where in `server.js`

```js
const svrx = require('svrx');

svrx({
  plugins: [{
      name: 'webpack',
      options: {
          file: './custom.webpack.config.js'
      }
  }],
}).start();

```


> then try editing file the `/src` to see Hot-Reloading works

