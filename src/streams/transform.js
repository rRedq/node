import { Transform } from 'stream';

const transform = async () => {
  const transform = new Transform({
    transform(chunk, _, callback) {
      this.push(`${chunk.toString().split('').reverse().join('')}\n`);
      callback();
    },
  });

  process.stdin.pipe(transform).pipe(process.stdout);
};

await transform();
