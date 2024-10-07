import { readdir } from 'node:fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const rootPath = join(__dirname, 'files');
    const files = await readdir(rootPath);

    files.forEach((file) => console.log(file));
  } catch (err) {
    console.error('FS operation failed');
  }
};

await list();
