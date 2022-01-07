module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
          'module-resolver',
          {
              root: ['./src'],
              extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
              alias: {
                  '@styles': './src/utils/styles',
                  '@views': './src/views',
                  '@assets': './src/assets',
                  '@routes': './src/routes',
                  '@services': './src/services',
                  '@interfaces': './src/interfaces',
                  '@components': './src/components'
              }
          }
      ]
  ]
  };
};
