import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'fs';
import { exists } from '../shared/exists.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  try {
    const rootPath = join(__dirname, 'files');
    const oldPath = join(rootPath, 'wrongFilename.txt');
    const newPath = join(rootPath, 'properFilename.md');

    const isExist = await exists(newPath);

    if (isExist) {
      throw Error();
    }

    await promises.rename(oldPath, newPath);
    console.log('File renamed successfully');
  } catch (err) {
    console.error('FS operation failed');
  }
};

await rename();
