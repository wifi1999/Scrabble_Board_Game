//import { shuffle } from './shuffle.js';
import { Game } from './game.js';
import { Rack } from './rack.js';
import { wordScoreBoard, gameScoreBoard } from './scoreboard.js';

//console.log(shuffle([1, 2, 3, 4, 5])); // this should produce a different sequence each time
//let g = new Game();
//let r = new Rack();

// YOUR TESTS GO HERE
async function testWord(){
    await wordScoreBoard.saveWordScore('Zhi', 'Hello', 17);
}

await testWord();

async function testGame(){
    await gameScoreBoard.saveGameScore('Zhi', 19);
}

await testGame();

