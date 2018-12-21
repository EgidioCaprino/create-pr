import { readFileSync } from 'fs';
import { homedir } from 'os';

const string = readFileSync(`${homedir()}/create-pr.json`).toString();
const object = JSON.parse(string);

export default object;
