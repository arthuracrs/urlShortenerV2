const tsConfigPaths = require('tsconfig-paths');
const getPaths = require('./paths')

const baseUrl = 'src';
tsConfigPaths.register({
  baseUrl: ".",
  paths: getPaths(baseUrl)
});