const fs = require('fs');

const position = fs
  .readFileSync(__dirname + '/input-2.txt')
  .toString()
  .split('\n')
  .map((x, i) => {
    const parts = x.split(' ');
    if (parts.length !== 2) {
      console.log('Invalid line', i, x);
      return;
    }
    return [parts[0], parseInt(parts[1])];
  })
  .reduce(
    ([depth, position], [direction, amount]) => {
      switch (direction) {
        case 'up':
          return [depth - amount, position];
        case 'down':
          return [depth + amount, position];
        case 'forward':
          return [depth, position + amount];
        default:
          throw Error(`unknown direction: ${direction}`);
      }
    },
    [0, 0],
  );

console.log(`(${position[0]}, ${position[1]}) = ${position[0] * position[1]}`);
