import express from 'express';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();

app.use(cors());

const PORT = 5000 || process.env.PORT;

const server = app.listen(PORT, () =>
  console.log('Server running on port ' + PORT)
);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  socket.emit('me', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded');
  });

  socket.on('callUser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit('callUser', {
      signal: signalData,
      from,
      name,
    });
  });

  socket.on('answerCall', (data) => {
    io.to(data.to).emit('callAccepted', data.signal);
  });
});
