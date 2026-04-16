import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class RealTimeService {
  private socket: Socket | null = null;

  connect(onTaskCreated: () => void): void {
    if(this.socket?.connected){
      return;
    }

    if(this.socket){
      this.socket.connect();
    }

    this.socket = io(environment.apiUrl, {
      transports: ['websocket'],
    });

    this.socket.on("task:created", onTaskCreated);
  }

  connectDeleteTask(onTaskDeleted: () => void): void {
    if(this.socket?.connected){
      return;
    }

    if(this.socket){
      this.socket.connect();
    }

    this.socket = io(environment.apiUrl, {
      transports: ['websocket'],
    });

    this.socket.on("task:deleted", onTaskDeleted);
  }

  connectUpdateTask(onTaskUpdated: () => void): void {
    if(this.socket?.connected){
      return;
    }

    if(this.socket){
      this.socket.connect();
    }

    this.socket = io(environment.apiUrl, {
      transports: ['websocket'],
    });

    this.socket.on("task:updated", onTaskUpdated);
  }

  disconnect(): void {
    this.socket?.disconnect();
    this.socket?.off("task:created");
    this.socket?.off("task:deleted");
    this.socket?.off("task:updated");
  }
}

