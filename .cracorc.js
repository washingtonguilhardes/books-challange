const path = require('path');

module.exports = {
  // ...
  webpack: {
    alias: {
      '@src': path.join(path.resolve(__dirname, './src')),
    },
  },
};
