import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'fs';
import { exists } from '../shared/exists.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  try {
    const filePath = join(__dirname, 'files', 'fresh.txt');

    const isExist = await exists(filePath);

    if (isExist) {
      throw Error();
    }

    await promises.writeFile(filePath, 'I am fresh and young');
    console.log('file has been created');
  } catch {
    console.error('FS operation failed');
  }
};

await create();
