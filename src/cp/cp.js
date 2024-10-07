import { spawn } from 'node:child_process';
import { stdin, stdout } from 'node:process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
  const rootPath = join(__dirname, 'files', 'script.js');
  const child = spawn('node', [rootPath, ...args]);

  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'test']);
