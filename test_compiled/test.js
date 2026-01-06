import { JFATHER } from '../compiled/jfather.js-1.0.1.js';

const complexJson = {
  "user": {
    "id": 123,
    "name": "John Doe",
    "address": {
      "street": "123 Main St",
      "city": "Metropolis",
      "zip": "12345",
      "coordinates": {
        "lat": 40.7128,
        "lon": -74.0060
      }
    },
    "posts": [
      {
        "id": 1,
        "title": "My first post",
        "content": "Hello, world!",
        "tags": ["intro", "beginner"]
      },
      {
        "id": 2,
        "title": "Another post",
        "content": "Just testing.",
        "tags": ["testing", "dev"]
      }
    ],
    "preferences": {
      "notifications": true,
      "theme": "dark"
    }
  }
};

const paths = [
  'user.name',
  'user.address.city',
  'user.posts[].title',
  'user.address.coordinates.lat'
];

console.log("JSON object under test:");
console.log(JSON.stringify(complexJson));
console.log("\n\nPaths to extract from JSON object:");
console.log(JSON.stringify(complexJson));

console.log("\n\nTesting...");

const pickedData = JFATHER.parse(complexJson, paths);
console.log("\n\nPicked Data:");
console.log(pickedData);

const prettyStringified = JFATHER.stringify(complexJson, paths, true);
console.log("\n\nPretty Stringified JSON:");
console.log(prettyStringified);

const compactStringified = JFATHER.stringify(complexJson, paths, false);
console.log("\n\nCompact Stringified JSON:");
console.log(compactStringified);

console.log("\n\nHandling invalid data...");
try {
  const invalidPaths = ['user.invalidPath', 'user.address.zipcode'];
  const invalidData = JFATHER.parse(complexJson, invalidPaths);
  console.log("\nInvalid Data:");
  console.log(invalidData);
} catch (error) {
  console.error("\nError encountered:");
  console.log(error.message);
}
