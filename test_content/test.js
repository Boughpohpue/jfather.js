import { JFATHER } from '../content/jfather.js';

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

console.warn("JSON object under test:");
console.log(JSON.stringify(complexJson, null, 3));

console.warn("\n\nPaths to extract from JSON object:");
console.log(JSON.stringify(complexJson, null, 3));

console.warn("\n\nTesting...");

console.warn("\n\nPicked Data:");
console.log(JFATHER.parse(complexJson, paths));

console.warn("\n\nPretty Stringified JSON:");
console.log(JFATHER.stringify(complexJson, paths, true));

console.warn("\n\nCompact Stringified JSON:");
console.log(JFATHER.stringify(complexJson, paths, false));

console.warn("\n\nHandling invalid data...");
try {
  const invalidPaths = ['user.invalidPath', 'user.address.zipcode'];
  console.warn("\nInvalid Data:");
  console.log(JFATHER.parse(complexJson, invalidPaths));
} catch (error) {
  console.error("\nError encountered:");
  console.log(error.message);
}
