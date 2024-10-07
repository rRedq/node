import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const rootPath = join(__dirname, 'files', 'fileToWrite.txt');
  const stream = createWriteStream(rootPath);

  process.stdout.write('Please, type text:\n');

  process.stdin.on('data', (data) => {
    stream.write(data);
  });
};

await write();
