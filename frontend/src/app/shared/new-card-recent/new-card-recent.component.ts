import { Component, Input, OnInit } from '@angular/core';
import { Feed } from '@models/feed.model';

@Component({
  selector: 'app-new-card-recent',
  templateUrl: './new-card-recent.component.html',
  styleUrls: ['./new-card-recent.component.css']
})
export class NewCardRecentComponent implements OnInit {

  @Input() feed: Feed;

  constructor() { }

  ngOnInit(): void {
  }

}
