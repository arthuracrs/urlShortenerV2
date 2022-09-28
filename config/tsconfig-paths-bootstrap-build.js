const tsConfigPaths = require('tsconfig-paths');
const getPaths = require('./paths')

const baseUrl = 'dist';
tsConfigPaths.register({
  baseUrl: ".",
  paths: getPaths(baseUrl)
});