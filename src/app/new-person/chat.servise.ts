import { Subject } from 'rxjs';

import { Message } from '../shared/message.model';

export class ChatService {
  messagesChanged = new Subject<Message[]>();

  private sentMessages: Message[] = [];

  addMessage(message: string, index: number) {
    this.sentMessages.push(new Message(message, index));
    this.messagesChanged.next(this.sentMessages.slice());
  }

  deleteMessages() {
    this.sentMessages = [];
    this.messagesChanged.next([]);
  }
}
