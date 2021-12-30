const fs = require('fs');

const increases = fs
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n')
  .map((x) => parseInt(x))
  .reduce((windows, curr, i) => {
    debugger;

    if (i > 0) windows[i - 1] += curr;
    if (i > 1) windows[i - 2] += curr;
    windows.push(curr);

    return windows;
  }, [])
  .slice(0, -2)
  .reduce(
    ([increases, prev], curr) => [increases + (curr > prev ? 1 : 0), curr],
    [0, Number.POSITIVE_INFINITY],
  );

console.log(`Increases: ${increases[0]}`);
