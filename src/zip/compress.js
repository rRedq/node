import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createGzip } from 'zlib';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const compressPath = join(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = join(__dirname, 'files', 'archive.gz');

  const readStream = createReadStream(compressPath);
  const writeStream = createWriteStream(zipPath);

  readStream.pipe(createGzip()).pipe(writeStream);
};

await compress();
