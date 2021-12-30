const fs = require('fs');

const increases = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map((x) => parseInt(x))
  .reduce(
    ([increases, prev], curr) => [increases + (curr > prev ? 1 : 0), curr],
    [0, Number.POSITIVE_INFINITY],
  );
console.log(`Increases: ${increases[0]}`);
