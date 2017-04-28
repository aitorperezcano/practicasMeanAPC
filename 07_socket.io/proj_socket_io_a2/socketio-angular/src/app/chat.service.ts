import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as io from "socket.io-client";
import { Message } from "app/message";

@Injectable()
export class ChatService {

  private url: String = "http://localhost:3000/chat";
  private socket;

  constructor() { }

  getMessages(): Observable<Message> {
    return new Observable(observer => {
      // conexión y suscripción
      this.socket = io(this.url);
      // Logar conexión
      this.socket.on("connect", () => console.log("cliente conectado con id: %s", this.socket.id));
      // Cuando reciba un mensaje (el servidor lo envía a todo el chat), al observador se le pasan los datos
      this.socket.on("mando-un-mensaje", (datos: Message) => observer.next(datos));
      // quitar suscripción
      return () => this.socket.disconnect();
    });
  }

  sendMessage(message: Message): void {
    console.log("mensaje: ", message);
    this.socket.emit("mando-un-mensaje", message);
  }

}
