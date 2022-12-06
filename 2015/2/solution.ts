import * as fs from 'fs';
import * as path from 'path';

console.time('Solution One');
void (async () => {
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf-8' })
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") floor++
    if (input[i] === ")") floor--
  }
  
  console.log("Solution: ", floor)
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
  console.timeEnd('Solution One');
})()

console.time('Solution Two');
void (async () => {
  const input = fs.readFileSync(path.join(__dirname, 'input.txt'), { encoding: 'utf-8' })
  let floor = 0;
  let position;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") floor++
    if (input[i] === ")") floor--
    if (floor === -1) {
      position = i+1;
      break;
    }
  }
  
  console.log("Solution: ", position)
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
  console.timeEnd('Solution Two');
})()

