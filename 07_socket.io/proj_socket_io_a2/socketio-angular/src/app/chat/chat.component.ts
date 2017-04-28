import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from "app/chat.service";
import { Message } from "app/message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {

  private connection;
  private message: Message = new Message("", "");
  private messages: Message[] = [];

  constructor(private chatService: ChatService) { }

  sendMessage(): void {
    this.chatService.sendMessage(this.message);
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(
      (newMessage: Message) => {
        console.log("newMessage: ", newMessage);
        this.messages.push(newMessage);
      }
    );
  }

  // Este método se invocaría aunque no se implementase la interfaz, pero queda más elegante si se implementa
  ngOnDestroy(): void {
    this.connection.unsubscribe();
  }


}
