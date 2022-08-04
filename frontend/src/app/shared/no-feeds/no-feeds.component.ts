import { Component, Input, OnInit } from '@angular/core';
import { messages } from '@constants/messages.constant';
import { IMessage } from '@interfaces/message.interface';

@Component({
  selector: 'app-no-feeds',
  templateUrl: './no-feeds.component.html',
  styleUrls: ['./no-feeds.component.css']
})
export class NoFeedsComponent implements OnInit {
  @Input() messageIndex: number = 0;
  public messageSelected: IMessage;
  constructor() {
  }

  ngOnInit(): void {
    this.messageSelected = messages[+this.messageIndex];
  }

}
