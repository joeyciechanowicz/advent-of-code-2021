const fs = require('fs');

const LINES = 1000;
const BITS = 12;

const bitCounts = fs
  .readFileSync(__dirname + '/input-3.txt')
  .toString()
  .split('\n')
  .map((x) => parseInt(x, 2))
  .reduce(
    (counts, curr) => {
      for (let i = 0; i < BITS; i++) {
        counts[i] += (curr & Math.pow(2, i)) >> i;
      }
      return counts;
    },
    [...Array(BITS)].map(() => 0),
  )
  .reverse();

const gamma = parseInt(
  bitCounts.map((x) => (x > LINES / 2 ? 1 : 0)).join(''),
  2,
);
const epsilon = parseInt(
  bitCounts.map((x) => (x > LINES / 2 ? 0 : 1)).join(''),
  2,
);

console.log(`g=${gamma}, e=${epsilon}. Mult = ${gamma * epsilon}`);
