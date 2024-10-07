import { createReadStream, createWriteStream } from 'fs';
import { join } from 'path';
import { createUnzip } from 'zlib';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const decompressPath = join(__dirname, 'files', 'fileToCompress.txt');
  const zipPath = join(__dirname, 'files', 'archive.gz');

  const readStream = createReadStream(zipPath);
  const writeStream = createWriteStream(decompressPath);

  readStream.pipe(createUnzip()).pipe(writeStream);
};

await decompress();
