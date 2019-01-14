import { existsSync, lstatSync, readFileSync } from 'fs';
import { homedir } from 'os';
import merge from 'lodash/merge';

const readConfig = (path) => {
  const valid = existsSync(path) && lstatSync(path).isFile();
  const string = valid ? readFileSync(path).toString() : '{}';
  return JSON.parse(string);
};

const globalConfig = readConfig(`${homedir()}/create-pr.json`);
const currentConfig = readConfig(`${process.cwd()}/create-pr.json`);

export default merge({}, globalConfig, currentConfig);
