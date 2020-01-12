/* eslint-disable */
const tailwindcss = require('tailwindcss');

module.exports = {
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    ]
  },
  style: {
    postcss: {
      plugins: [
        tailwindcss,
      ],
    }
  },
};
