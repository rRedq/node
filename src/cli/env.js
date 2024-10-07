import { env } from 'node:process';

const parseEnv = () => {
  const result = [];

  Object.keys(env).forEach((key) => {
    if (key.match(/RSS_/)) {
      result.push(`${key}=${env[key]}`);
    }
  });

  console.log(result.join('; '));
};

parseEnv();
