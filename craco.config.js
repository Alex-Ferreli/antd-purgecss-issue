/* eslint-disable */
const { whenProd } = require('@craco/craco');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

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
        ...whenProd(() => [
          purgecss({
            content: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js', './src/**/*.tsx', './src/**/*.ts'],
          }),
        ], []),
      ],
    }
  },
};
