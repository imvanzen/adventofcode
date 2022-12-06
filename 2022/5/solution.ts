import * as fs from 'fs';
import * as path from 'path';

console.time('Load input file');
const input = fs.readFileSync(path.join(__dirname, './test.txt'), {encoding: 'utf-8'})
console.timeEnd('Load input file');

console.time('Solution One');
void (async () => {
  console.log(input.split(/\n\s*\n/));
  return;
  const [cratesRaw, stepsRaw] = input.split(/^\r?\n$/);

  const crates = cratesRaw.split(/\r?\n/).reduce((data, crate) => {
    const crateLine = crate.match(/\s?([A-Z1-9]|\s{3})/g);
    
    return data;
  }, {crates: [], steps: []});
  console.log("Solution One: ", null)
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
  console.timeEnd('Solution One');
})()


// console.time('Solution Two');
// void (async () => {  
//   const rl = readline.createInterface({
//     input: fs.createReadStream(path.join(__dirname, './input.txt')),
//     crlfDelay: Infinity,
//   });

//   let solution: number = 0;

//   rl.on('line', (line: string) => {
//     // console.log('line: ', line);
//     const [setA, setB] = line.split(',').map(set => set.split('-').map(numb => parseInt(numb)))
    
//     // set One Overlaps set Two
//     if ((setA[0] <= setB[0] && setA[1] >= setB[0]) 
//     // set Two Overlaps set One
//     || (setB[0] <= setA[0] && setB[1] >= setA[0]) ) {
//       console.log('line: ', line);
//       solution++
//     }
//   });

//   await new Promise((res) => rl.once('close', res));
  
//   console.log("Solution Two: ", solution)
//   console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
//   console.timeEnd('Solution Two');
// })()
