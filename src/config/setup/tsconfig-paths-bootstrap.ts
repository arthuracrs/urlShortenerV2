import { compilerOptions } from '../../../tsconfig.json';
import { register } from 'tsconfig-paths';

register({
  baseUrl: compilerOptions.outDir,
  paths: compilerOptions.paths,
});