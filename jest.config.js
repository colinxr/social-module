module.exports = {
  transform: {
    '\\.(js|ts)$': [
      'babel-jest',
      {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-transform-runtime'],
      },
    ],
  },
  snapshotSerializers: [require.resolve('jest-serializer-vue-tjw')],
  collectCoverage: true,
  collectCoverageFrom: ['src/**', '!templates/**'],
}
