const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { Chess } = require('chess.js'); // Import chess.js for move validation

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000", // React app URL
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const chess = new Chess(); // Create a new Chess instance to handle the game state

// Send the initial game state to clients when they connect
io.on('connection', (socket) => {
  console.log('A player connected');

  socket.emit('gameState', {
    fen: chess.fen(),
    history: chess.history(),
    isWhiteTurn: chess.turn() === 'w',
  });

  socket.on('makeMove', (move) => {
    console.log('Received move:', move);

    // Validate the move using chess.js
    const result = chess.move({
      from: move.from,
      to: move.to,
      promotion: 'q', // Assume promotion to queen for simplicity, you can customize this later
    });

    if (result) {
      // If the move is valid, update the game state
      const updatedGameState = {
        fen: chess.fen(),
        history: chess.history(),
        isWhiteTurn: chess.turn() === 'w',
      };

      // Broadcast the updated game state to all clients
      io.emit('gameState', updatedGameState);
    } else {
      // If the move is invalid, you could send an error back to the client
      console.log('Invalid move');
      socket.emit('invalidMove', 'This move is not valid');
    }
  });

  socket.on('disconnect', () => {
    console.log('A player disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
