# Scrabble Game

## Overview

Welcome to the Scrabble Game repository! This full-stack Scrabble Game App provides an immersive and competitive word-building experience for two players. Developed with a focus on object-oriented principles, this application offers a dynamic and engaging gameplay environment.

## Features

### Game class 
- The Game class in this project implements the logic for a Scrabble-like word game. It includes functionality for managing the game board, the tile bag, and player moves.
- Board management: The class manages a 15x15 game board where players can place words horizontally or vertically.
- Tile bag: The class includes a tile bag with letter frequencies based on Scrabble rules. Players can draw tiles from this bag during the game.
- Word placement: The class provides methods to check if a word can be legally placed on the board at a given position and direction.
- Scoring: The class calculates the score for a played word, considering special tiles on the board.
- Game State Persistence: The game state, including the board and tile bag, is persisted in the browser's local storage. This allows players to resume their game even after closing the browser.

### Post Management
- Users can create, like, and dislike posts.
- Efficient post management is achieved through Express.js and MongoDB.

### User Interaction
- Users can follow/unfollow other users.
- Profile lookup and friends' friends access enhance user interactions.

### Real-time Chat
- Socket.io is employed to establish a real-time chat system.
- Users can exchange messages seamlessly, enhancing the overall user experience.

### Responsive Design
- React.js is utilized to craft aesthetically pleasing and responsive pages.
- The application is designed to provide a seamless experience across different devices.



## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
      git clone github.com/wifi1999/Kusiday_Deploy.git

2. Install the dependencies:  
   ```bash
      cd api
      npm install
   ```
   ```bash 
      cd cliet
      npm install
   ```
   ```bash
      cd socket
      npm install
   ```
   
3. Create Environmental Variables: 
```bash
   cd api 
   touch .env
   MONGO_URL=your_mongodb_connection_url # insert this line to the .env file
``` 
```bash
   cd client
   touch .env
   REACT_APP_PUBLIC_FOLDER=http://localhost:8080/images # insert this line to the .env file
```

4. Starting the Application: 
```bash
   cd api
   npm run dev
```
   The server will run on http://localhost:8080.

```bash
   cd socket
   npm run dev
```
   The server will run on http://localhost:8900.

```bash
   cd frontend
   npm start
```
   The Server will run on http://localhost:3000.

### Open your browser and go to http://localhost:3000 to use the application. Enjoy!




