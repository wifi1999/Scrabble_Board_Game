import {database} from './database.js';
await database.saveWordScore('Zhi', 'hello', 15);
console.log(await database.top10WordScores());

await database.saveGameScore('Zhi', 15);
console.log(await database.top10GameScores());