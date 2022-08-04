import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '@services/auth.service';

import { Website } from '@models/website.model';

import { UserService } from '@services/user.service';

@Component({
  selector: 'app-websites-card',
  templateUrl: './websites-card.component.html',
  styleUrls: ['./websites-card.component.css']
})
export class WebsitesCardComponent implements OnInit {
  @Input() websites: Website[];
  private isAuthenticated: boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  subscribeWebsite(id: string){
    if(!this.isAuthenticated) {
      return this.authService.showModalAuth('init');
    }
    this.userService.modifyPreferences(id, 'subscription').subscribe(resp => {
      this.websites.map(website => {
        if( website._id === id)
          website.inUser = !website.inUser;
      });
    });
  }

  public handleMissingImage(event: Event) {
  (event.target as HTMLImageElement).style.display = 'none';
  }

}
