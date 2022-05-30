import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChatService } from '../new-person/chat.servise';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.css'],
})
export class ChatHistoryComponent implements OnInit {
  private subscription: Subscription;
  sentMessages: Message[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.subscription = this.chatService.messagesChanged.subscribe(
      (message: Message[]) => {
        this.sentMessages = message;
      }
    );
  }

  onClearChat(): void {
    this.chatService.deleteMessages();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
