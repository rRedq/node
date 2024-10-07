import { join } from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const __dirname = dirname(fileURLToPath(import.meta.url));

const createNewWorker = (data) => {
  return new Promise((resolve) => {
    const path = join(__dirname, 'worker.js');
    const worker = new Worker(path, { workerData: data });

    worker.on('message', (data) => resolve({ status: 'resolved', data }));
    worker.on('error', () => resolve({ status: 'error', data: null }));
  });
};

const performCalculations = async () => {
  const forWait = Array.from({ length: cpus().length }, (_, i) =>
    createNewWorker(10 + i),
  );

  const result = await Promise.all(forWait);

  console.log(result);
};

await performCalculations();
