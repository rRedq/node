import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const rootPath = join(__dirname, 'files', 'fileToRead.txt');

  const stream = createReadStream(rootPath);
  stream.on('data', (data) => {
    process.stdout.write(data);
  });
};

await read();
