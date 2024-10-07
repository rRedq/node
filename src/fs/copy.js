import { cp } from 'node:fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  try {
    const rootPath = join(__dirname, 'files');
    const newPath = join(__dirname, 'files_copy');

    await cp(rootPath, newPath, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });

    console.log('Success');
  } catch (err) {
    console.error('FS operation failed');
  }
};

await copy();
