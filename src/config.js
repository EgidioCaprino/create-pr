import { readFileSync } from 'fs';

const string = readFileSync('create-pr.json').toString();
const object = JSON.parse(string);

export default object;
