module.exports = {
  context: __dirname,
  entry: ['./client.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
};
