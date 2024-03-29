# Scrabble Game

## Overview

Welcome to the Scrabble Game repository! This full-stack Scrabble Game App provides an immersive and competitive word-building experience for two players. Developed with a focus on object-oriented principles, this application offers a dynamic and engaging gameplay environment.

## Video Demo

[Demo.mp4 ](https://github.com/wifi1999/Score_Board_Game/blob/master/Demo.mp4)

## Project Structure: 

### Client folder: 

#### Game class 
- The Game class in this project implements the logic for a Scrabble-like word game. It includes functionality for managing the game board, the tile bag, and player moves.
- Board management: The class manages a 15x15 game board where players can place words horizontally or vertically.
- Tile bag: The class includes a tile bag with letter frequencies based on Scrabble rules. Players can draw tiles from this bag during the game.
- Word placement: The class provides methods to check if a word can be legally placed on the board at a given position and direction.
- Scoring: The class calculates the score for a played word, considering special tiles on the board.
- Game State Persistence: The game state, including the board and tile bag, is persisted in the browser's local storage. This allows players to resume their game even after closing the browser.

#### Rack class
- The rack class in this project has following functionalities:
- Display the current available tiles
- Rmove a tile from rack
- Takes tiles from game's bag and add them to the rack
- Render and update rack in specified HTML elemenmt

#### scrabbleUtils.js 
- This file contains utility functions for the Scrabble game, offering the following functionalities:
- Check word construction
- Compute scores
- Validate words against a provided dictionary.

#### scoreboard class 
- This class contains the implementation of three classes: WordScoreBoard, GameScoreBoard, and TopWordAndGameScoreBoard. These classes provide the following functionalities:
- Manage and display word and game scores
- Retrieve and render the top word and game scores from a server.

#### scoring class 
- This class represents the scoring rules for the Scrabble board. It includes the following methods:
- Initialize the board
- Calculate the score for a given word
- Generate a label for the multiplier at a specific board position. 
- Exports a mapping of letter scores and an array of position multipliers.

#### Main.js 
- The main.js file in this project serves as the main script for the Scrabble-like word game. It orchestrates the interaction between the game logic, UI components, player turns, and scoring. Here's a breakdown of the main functionalities:
- Imports necessary modules, including the Game class, Rack class, and utility function
- Sets up UI components using DOM elements.
- Creates and renders the game board using the Game class.
- Initializes and renders player racks.
- Listens for user interactions with buttons (play, reset, help, and end) and responds accordingly.


### Server folder: 

#### database class
- This class serves as a simple storage system for word and game scores. It utilizes file I/O operations from the fs/promises module to read and write data to a JSON file, acting as a persistent storage medium. The class includes the following functionalities:
- Save word and game scores
- Retrieve the top 10 word and game scores
- Reading and writing data.

#### index.js
- This file initializes and configures an Express server for handling word and game score data using the provided database.js. The file includes endpoints to save word and game scores, retrieve the top 10 word and game scores, and serves static files for the client.






## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js

### Installation

1. Clone the repository:
   ```bash
      git clone github.com/wifi1999/Score_Board_Game

2. Install the dependencies:  
   ```bash
      cd server 
      npm install
   ```
   
3. Starting the Application: 
```bash
   cd server
   npm run dev
```
   The server will run on http://localhost:3000.
   

### Open your browser and go to http://localhost:3000 to use the application. Enjoy!




