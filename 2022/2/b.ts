#!node

import * as fs from 'fs';
import * as path from 'path';

// Opponent
// A - Rock
// B - Paper
// C - Scissors

// You
let Rock = 1 // X - Rock - 1 point
let Paper = 2 // Y - Paper - 2 points
let Scissors = 3 // Z - Scissors - 3 points

// Total Score
let Lost = 0
let Draw = 3
let Won = 6

function readFile() {
  const fileContents = fs.readFileSync(
    path.join(__dirname, './a.input.txt'), {
      encoding: 'utf-8',
    }
  );

  const rounds: string[] = fileContents.split(/\r?\n/);
  const combinations = {
    // Rock
    "A X": Lost + Scissors,
    "A Y": Draw + Rock, // Rock - draw
    "A Z": Won + Paper,

    // Paper
    "B X": Lost + Rock,
    "B Y": Draw + Paper,
    "B Z": Won + Scissors,

    // Scissors
    "C X": Lost + Paper,
    "C Y": Draw + Scissors,
    "C Z": Won + Rock,
  }
  
  let score = rounds.reduce((sum, round) => {
    sum += combinations[round]
    return sum;
  }, 0)

  console.log("Total score is ", score)
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
}

readFile()