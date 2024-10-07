import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join } from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const path = join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const readStream = createReadStream(path);

  readStream.on('readable', () => {
    const data = readStream.read();
    if (data) hash.update(data);
    else {
      console.log(hash.digest('hex'));
    }
  });
};

await calculateHash();
