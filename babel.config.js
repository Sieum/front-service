module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
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
          '@': './src',
          '@apis': './src/apis',
          '@components': './src/components',
          '@nav': './src/routes',
          '@screens': './src/screens',
          '@icons': './src/static/icons',
          '@images': './src/static/images',
        },
      },
    ],
  ],
};