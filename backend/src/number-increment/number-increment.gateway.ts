import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*', // need to change it
  },
})
export class NumberIncrementGateway {
  @WebSocketServer()
  private readonly server: Server;

  handleNumberIncremented() {
    this.server.emit('incremented');
  }
}
