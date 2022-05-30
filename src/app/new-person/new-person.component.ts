import { Component, Input } from '@angular/core';

import { ChatService } from './chat.servise';

@Component({
  selector: 'app-new-person',
  templateUrl: './new-person.component.html',
  styleUrls: ['./new-person.component.css'],
})
export class NewPersonComponent {
  message: string = '';

  @Input() index: number;

  constructor(private chatService: ChatService) {}

  onSentMessage(): void {
    this.chatService.addMessage(this.message, this.index);
    this.message = '';
  }
}
