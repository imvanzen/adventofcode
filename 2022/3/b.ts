#!node

import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

console.time('Time');
function readFile() {
  const fileContents = fs.readFileSync(
    path.join(__dirname, './a.input.txt'), {
      encoding: 'utf-8',
    }
  ).trimEnd().split(/\r?\n/);

  function getPriority(char) {
    return char === char.toLowerCase()
      ? char.codePointAt(0) - 'a'.codePointAt(0) + 1
      : char.codePointAt(0) - 'A'.codePointAt(0) + 27;
  }

  let score: number = 0;
  let unique: string[];

  for (let i = 0; i < fileContents.length; i += 3) {
    const sacks = fileContents.slice(i, i + 3).map((line) => [...line]);
    let intersection = sacks[0];
    for (const sack of sacks.slice(1)) {
      intersection = intersection.filter((char) => sack.includes(char));
    }
    score += getPriority(intersection[0]);
} 

  console.log("Total Score", score);
  
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
  console.timeEnd('Time');
}

readFile();
