import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { NewPersonComponent } from './new-person/new-person.component';
import { ChatHistoryComponent } from './chat-history/chat-history.component';

import { ChatService } from './new-person/chat.servise';

@NgModule({
  declarations: [AppComponent, NewPersonComponent, ChatHistoryComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
