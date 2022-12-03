#!node

import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline'

console.time('Time');
void (async () => {
  const rl = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, './a.input.txt')),
    crlfDelay: Infinity,
  });

  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let score: number = 0

  rl.on('line', (line: string) => {
    console.log('line: ', line);
    
    const n = line.length;
    const s2 = line.substring(n / 2);
    
    for (let i = 0; i < n/2; i++) {
      if (s2.indexOf(line[i]) > -1) {
        console.log("line char:", line[i], (chars.indexOf(line[i])+1))
        score += (chars.indexOf(line[i])+1)
        break
      }
    }
  });

  await new Promise((res) => rl.once('close', res));

  console.log("Total Score", score)
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
  console.timeEnd('Time');
})();