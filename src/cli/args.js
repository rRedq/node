import { argv } from 'node:process';

const parseArgs = () => {
  const result = [];

  for (let i = 0; i < argv.length; i++) {
    if (argv[i].match(/--/)) {
      result.push(`${argv[i].slice(2)} is ${argv[i + 1]}`);
      i++;
    }
  }

  console.log(result.join(', '));
};

parseArgs();
