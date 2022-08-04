import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, forkJoin, Subject } from 'rxjs';

import { Feed } from '@models/feed.model';

import { AuthService } from '@services/auth.service';
import { FeedService } from '@services/feed.service';
import { UserService } from '@services/user.service';
// use encapsulation to styles works correctly from css files
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedComponent implements OnInit {
  public feed: Feed;
  public recentsFeed: Feed[];
  public isLoading: boolean = true;

  private saveFeedSub: Subject<string> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private feedService: FeedService,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.saveFeedSub.pipe(
      debounceTime(250))
      .subscribe((idFeed) => this.updatePreferences(idFeed)
      );
    }

    ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ feedID }) => this.loadData(feedID));
  }

  loadData(id: string): void {
    this.isLoading = true;
    forkJoin({
      feed: this.feedService.getFeed(id),
      recentFeeds: this.feedService.getFeeds(0, 6, false),
    }).subscribe({
      next: ({ feed, recentFeeds }) => {
        this.feed = feed,
        this.recentsFeed = recentFeeds;
      },
      complete: () => this.isLoading = false,
    })
  }

  goToFeed(id: string): void {
    this.router.navigate([`/feed/${id}`]);
  }

  saveFeed(id: string) {
    if(!this.authService.isAuthenticated()) {
      return this.authService.showModalAuth('init');
    }
    this.saveFeedSub.next(id);
  }

  updatePreferences(idFeed: string): void {
    this.userService.modifyPreferences(idFeed, 'saved').subscribe(() => {
      this.feed.inUser = !this.feed.inUser;
    })
  }

  changeStyle(element: any, change: boolean): void {
    if(change) element.classList.add('bxs-bookmark');
    else element.classList.remove('bxs-bookmark')
  }

}
