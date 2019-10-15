# Example with react-loader

React Loader Example for Svrx


### **cli way**

```bash
svrx -p webpack?config=custom.webpack.config.js
```

> default config file is `webpack.config.js` in pwd

you can also keep the param in `.svrxrc` file

### **or programmatic way**

```js
node server.js
```

where in `server.js`

```js
const svrx = require('@svrx/svrx');

svrx({
  plugins: [{
      name: 'webpack',
      options: {
          config: './custom.webpack.config.js'
      }
  }],
}).start();

```


> then try editing file the `/src` to see Hot-Reloading works

