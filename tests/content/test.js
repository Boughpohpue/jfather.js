import { JFATHER } from '../../content/jfather.js';
import { codeStyleMap, complexJson, paths, invalidPaths, mixedPaths } from '../data/test_data.js';

const resultStyleMap = new Map([["breaklines", true]]);

console.info("\n\n\nStarting test...");

console.warn("\n\nPicking data from object:\n");
const pickedData = JFATHER.parse(complexJson, paths);
console.log("JFATHER.parse(complexJson, paths);", codeStyleMap);
console.log(pickedData, resultStyleMap);

console.warn("\n\nPicking data as JSON string:\n");
const pickedDataStr = JFATHER.stringify(complexJson, paths, false);
console.log("JFATHER.stringify(complexJson, paths, false);", codeStyleMap);
console.log(pickedDataStr, resultStyleMap);

console.warn("\n\nPicking data as JSON pretty string:\n");
const pickedDataStrPrty = JFATHER.stringify(complexJson, paths, true);
console.log("JFATHER.stringify(complexJson, paths, true);", codeStyleMap);
console.log(pickedDataStrPrty, resultStyleMap);

console.warn("\n\nPicking data for invalid paths:\n");
const invalidPathsData = JFATHER.stringify(complexJson, invalidPaths, true);
console.log("JFATHER.stringify(complexJson, invalidPaths, true);", codeStyleMap);
console.log(invalidPathsData, resultStyleMap);

console.warn("\n\nPicking data for mixed paths (valid&invalid):\n");
const mixedPathsData = JFATHER.stringify(complexJson, mixedPaths, true);
console.log("JFATHER.stringify(complexJson, mixedPaths, true);", codeStyleMap);
console.log(mixedPathsData, resultStyleMap);

console.info("\n\nTest complete!");
