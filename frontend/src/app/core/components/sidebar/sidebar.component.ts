import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { User } from '@models/user.model';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  private sidebar: any;
  private wrapper: any;
  public userActive: User;
  private userActiveSubscription: Subscription;

  public isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.userActive = authService.getUserActive;
  }

  ngOnDestroy(): void {
    this.userActiveSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.sidebar = document.querySelector('.sidebar');
    this.wrapper = document.querySelector('.wrapper');
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.userActiveSubscription = this.authService.isAuthenticatedEmitter.subscribe(({isAuth}) => {
      if(isAuth) {
        this.setUserInfoActive();
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  setUserInfoActive(): void {
    this.userActive = this.authService.getUserActive;
  }

  get getName(): string {
    const { name, lastName, email } = this.userActive;
    return (name && name?.length > 0) ? `${name} ${lastName || ''}` : email;
  }

  showModal(to: 'login'|'register'): void {
    this.authService.showModalAuth(to);
  }

  goToHome(): void  {
    this.router.navigate(['/']);
  }

}
