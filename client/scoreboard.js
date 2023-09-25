class WordScoreBoard {
  constructor() {
    this.words = [];
  }

  // TODO #8: Save the word score to the server
  async saveWordScore(name, word, score) {
    this.words.push({ name, word, score });

    try {
      const response = await fetch(`http://localhost:3000/wordScore?name=${name}&word=${word}&score=${score}`, {
        method: 'POST'
      });
      response.ok? console.log('Word saved successfully') : console.log('Failed to save word');    
    } 
    catch (err) {
      console.error('An error occurred while saving the word:', err);
    }
  }

  render(element) {
    let html = '<h1>Word Scores</h1>';
    html += '<table>';
    this.words.forEach((word) => {
      html += `
        <tr>
          <td>${word.name}</td>
          <td>${word.word}</td>
          <td>${word.score}</td>
        </tr>
      `;
    });
    html += '</table>';
    element.innerHTML = html;
  }
}

class GameScoreBoard {
  constructor() {
    this.game = [];
  }

  render(element) {
    let html = '<h1>Game Score</h1>';
    html += '<table>';
    this.game.forEach((word) => {
      html += `
        <tr>
          <td>${word.name}</td>
          <td>${word.score}</td>
        </tr>
      `;
    });
    html += '</table>';
    element.innerHTML = html;
  }

  // TODO #9: Save the game score to the server
  async saveGameScore(name, score) {
    this.game.push({name, score});
    
    try{
      const response = await fetch(`http://localhost:3000/gameScore?name=${name}&score=${score}`, {method: 'POST'});
      response.ok? console.log('Game score saved successfully') : console.log('Failure to save game score');
    }
    catch(err){
      console.error('An error occur while saving game score', err);
    }
  }
}

class TopWordAndGameScoreBoard {
  // TODO #10: Render the top word and game scores
  constructor(){
    this.highestWordScores = [];
    this.highestGameScores = [];
  }

  async render(element) {
    try{
      const wordResponse = await fetch('http://localhost:3000/highestWordScores', {method: 'GET'});
      this.highestWordScores = await wordResponse.json();

      const gameResponse = await fetch('http://localhost:3000/highestGameScores', {method: 'GET'});
      this.highestGameScores = await gameResponse.json();

      let html = '<h1>Top Scores</h1>';
      html += '<table class="top-score-boards">';

      html += '<tr><th>Word Scores</th></tr>';
      highestWordScores.forEach((wordScore) => {
        html += `<tr><td>${wordScore.name}</td><td>${wordScore.word}</td><td>${wordScore.score}</td></tr>`;
      });

      html += '<tr><th>Game Scores</th></tr>';
      highestGameScores.forEach((gameScore) => {
        html += `<tr><td>${gameScore.name}</td><td>${gameScore.score}</td></tr>`;
      });

      html += '</table>';
      element.innerHTML = html;
    }
    catch(err){
      console.error('An error occurred while rendering', err);
    }
  }
}

export const wordScoreBoard = new WordScoreBoard();
export const gameScoreBoard = new GameScoreBoard();
export const topWordAndGameScoreBoard = new TopWordAndGameScoreBoard();


