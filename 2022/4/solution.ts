import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline'

console.time('Solution One');
void (async () => {
  
  const rl = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, './input.txt')),
    crlfDelay: Infinity,
  });

  let solution: number = 0;

  rl.on('line', (line: string) => {
    // console.log('line: ', line);
    const [setA, setB] = line.split(',').map(set => set.split('-').map(numb => parseInt(numb)))
    
    // set One includes set Two
    if ((setA[0] <= setB[0] && setB[1] <= setA[1]) 
    // set Two includes set One
    || (setB[0] <= setA[0] && setA[1] <= setB[1])) {
      solution++
    }
  });

  await new Promise((res) => rl.once('close', res));
  
  console.log("Solution One: ", solution)
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
  console.timeEnd('Solution One');
})()


console.time('Solution Two');
void (async () => {  
  const rl = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, './input.txt')),
    crlfDelay: Infinity,
  });

  let solution: number = 0;

  rl.on('line', (line: string) => {
    // console.log('line: ', line);
    const [setA, setB] = line.split(',').map(set => set.split('-').map(numb => parseInt(numb)))
    
    // set One Overlaps set Two
    if ((setA[0] <= setB[0] && setA[1] >= setB[0]) 
    // set Two Overlaps set One
    || (setB[0] <= setA[0] && setB[1] >= setA[0]) ) {
      console.log('line: ', line);
      solution++
    }
  });

  await new Promise((res) => rl.once('close', res));
  
  console.log("Solution Two: ", solution)
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
  console.timeEnd('Solution Two');
})()
