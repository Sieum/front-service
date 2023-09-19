module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      'babel-plugin-styled-components',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '~apis': './src/apis',
          '~components': './src/components',
          '~nav': './src/nav',
          '~screens': './src/screens',
          '~icons': './src/static/icons',
          '~images': './src/static/images',
        },
      },
    ],
  ],
};