const svrx = require('@svrx/svrx');

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
