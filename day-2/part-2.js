const fs = require('fs');

const pos = fs
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
    ([depth, position, aim], [direction, amount]) => {
      switch (direction) {
        case 'up':
          return [depth, position, aim - amount];
        case 'down':
          return [depth, position, aim + amount];
        case 'forward':
          return [depth + amount * aim, position + amount, aim];
      }
    },
    [0, 0, 0],
  );

console.log(`(${pos[0]}, ${pos[1]}, ${pos[2]}) = ${pos[0] * pos[1]}`);
