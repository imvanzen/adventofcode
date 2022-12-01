#!node

import * as fs from 'fs'
import * as path from 'path'

function readFile() {
  const fileContents = fs.readFileSync(
    path.join(__dirname, './a.input.txt'), {
      encoding: 'utf-8',
    },
  );

  let curr: number = 0;
  let maxIndex: number = 0;
  let aggr: number[] = [0];
  const allCalories: string[] = fileContents.split('\r\n')
  
  for (let index in allCalories) {
    if (allCalories[index] === '') {
      curr++
      aggr[curr] = 0
    } else {
      aggr[curr] += parseInt(allCalories[index])
    }
  }

  const topThree = aggr.sort((a, b) => b - a).splice(0, 3)

  console.log("Top three elfes", topThree)
  console.log("Their sum", topThree.reduce((sum, numb) => sum += numb, 0))
}

readFile()