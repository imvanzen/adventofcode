#!node

import * as fs from 'fs';
import * as path from 'path';

function readFile() {
  const fileContents = fs.readFileSync(
    path.join(__dirname, './a.input.txt'), {
      encoding: 'utf-8',
    }
  );

  let curr: number = 0;
  let aggr: number[] = [0];
  const allCalories: string[] = fileContents.split('\r\n');
  
  for (let index in allCalories) {
    if (allCalories[index] === '') {
      curr++
      aggr[curr] = 0;
    } else {
      aggr[curr] += parseInt(allCalories[index]);
    }
  }

  console.log("elf with the max number of calories", Math.max(...aggr))
}

readFile()