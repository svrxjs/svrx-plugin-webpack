const svrx = require('svrx');

svrx({
  plugins: [{
      name: 'webpack',
      options: {
          file: './custom.webpack.config.js'
      }
  }],
}).start();
