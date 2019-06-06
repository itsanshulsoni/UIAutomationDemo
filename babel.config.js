module.exports = api => {
  // Cache the returned value forever and don't call this function again.
  api.cache(true);

  return {
    env: {
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              debug: false,
              useBuiltIns: 'entry',
              targets: {
                node: '10'
              }
            }
          ]
        ]
      }
    }
  };
};
