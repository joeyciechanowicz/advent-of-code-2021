const fs = require('fs');

const LINES = 1000;
const BITS = 12;

const all = fs
  .readFileSync(__dirname + '/input-3.txt')
  .toString()
  .split('\n')
  .map((x) => parseInt(x, 2));

function filter(lines, position, bitCriteria) {
  if (lines.length - 1 === 1) {
    return lines[0];
  }

  const bitPos = Math.pow(2, position - 1);

  const bitCount = lines.reduce((count, curr) => {
    return count + ((curr & bitPos) >> (position - 1));
  }, 0);

  debugger;
  const filterValue = bitCount >= lines.length / 2 === bitCriteria ? 1 : 0;

  const filtered = lines.filter(
    (x) => (x & bitPos) >> (position - 1) === filterValue,
  );

  return filter(filtered, position - 1, bitCriteria);
}

const oxygenRating = filter(all, BITS, true);
const co2ScrubberRating = filter(all, BITS, false);

console.log(
  `Oxy: ${oxygenRating}, CO2: ${co2ScrubberRating}. Mult = ${
    oxygenRating * co2ScrubberRating
  }`,
);
