import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket:Socket) {
    this.socket = new Socket({url: 'http://localhost:3001'});
   }

   connect(){
    this.socket.connect()
   }

  sendDrawingData(data:any){
    this.socket.emit('draw',data);
  }

  onDrawingData(){
    return this.socket.fromEvent('draw');
  }
}
