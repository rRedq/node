import path from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { dirname } from 'node:path';
import { join } from 'path';
import { createServer as createServerHttp } from 'http';
import { promises } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const firstPath = join(__dirname, 'files', 'a.json');
const secondPath = join(__dirname, 'files', 'b.json');

const firstObject = await promises.readFile(firstPath, 'utf-8');
const secondObject = await promises.readFile(secondPath, 'utf-8');

const random = Math.random();
let unknownObject;

if (random > 0.5) {
  unknownObject = firstObject;
} else {
  unknownObject = secondObject;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
