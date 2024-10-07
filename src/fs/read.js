import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  try {
    const rootPath = join(__dirname, 'files', 'fileToRead.txt');

    const data = await promises.readFile(rootPath, 'utf-8');
    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};

await read();
