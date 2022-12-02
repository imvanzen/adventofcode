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
    "A X": Rock + Draw,
    "A Y": Paper + Won,
    "A Z": Scissors + Lost,

    "B X": Rock + Lost,
    "B Y": Paper + Draw,
    "B Z": Scissors + Won,

    "C X": Rock + Won,
    "C Y": Paper + Lost,
    "C Z": Scissors + Draw,
  }
  
  let score = rounds.reduce((sum, round) => {
    sum += combinations[round]
    return sum;
  }, 0)

  console.log("Total score is ", score)
  console.log(`Used ${process.memoryUsage().heapUsed / 1024 / 1024} MB`);
}

readFile()