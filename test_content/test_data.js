export const codeStyleMap = new Map([["style", "color: goldenrod;"], ["breaklines", true]])

console.info('Defining test data...\n\n');

console.warn("Source data object:\n");
export const complexJson = {
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
console.log("const complexJson = %O;", complexJson, codeStyleMap);

console.warn("\n\nPaths to extract:\n");
export const paths = [
  'user.name',
  'user.address.city',
  'user.posts[].title',
  'user.address.coordinates.lat'
];
console.log("const paths = %O;", paths, codeStyleMap);

console.warn("\n\nInvalid paths:\n");
export const invalidPaths = [
  'user.invalidPath',
  'user.address.zipcode'
];
console.log("const invalidPaths = %O;", invalidPaths, codeStyleMap);

console.warn("\n\nMixed (valid&invalid) paths:\n");
export const mixedPaths = [
  'user.name',
  'user.invalidPath',
  'user.address.city',
  'user.address.zipcode'
];
console.log("const mixedPaths = %O;", mixedPaths, codeStyleMap);
