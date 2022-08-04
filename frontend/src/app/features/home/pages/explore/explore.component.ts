import { Component, OnInit } from '@angular/core';
import { debounceTime, forkJoin, map, Observable, Subject } from 'rxjs';

import { Feed } from '@models/feed.model';
import { Website } from '@models/website.model';

import { FeedService } from '@services/feed.service';
import { WebsiteService } from '@services/website.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  private loadingNews: Subject<boolean> = new Subject();
  public isLoading: boolean = true;

  private skip: number = 0;
  private limit: number = 10;

  public websites: Website[] = [];
  public feeds: Feed[] = [];

  constructor(
    private websiteService: WebsiteService,
    private feedService: FeedService
  ) {
    this.loadingNews.pipe(debounceTime(2000)).subscribe(() => this.getDataInitial());
  }

  ngOnInit(): void {
    this.loadingNews.next(true);
  }

  getDataInitial() {
    document.body.scrollTop = 0; // this is for Safari
    document.documentElement.scrollTop = 0; // for another one
    this.skip = 0;
    this.isLoading = true;
    forkJoin({
      feeds: this.getFeeds(),
      websites: this.websiteService.getWebsites(),
    }).subscribe({
      next: ({ feeds, websites }) => {
        this.feeds = feeds;
        this.websites = websites;
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  reloadData() {
    this.isLoading = true;
    this.loadingNews.next(true);
  }

  getFeeds(): Observable<Feed[]> {
    return this.feedService.getFeeds(this.skip, this.limit, false).pipe(map(feeds => feeds));
  }

  onScroll() {
    this.skip += this.limit;
    this.getFeeds().subscribe(feeds => this.feeds = [...this.feeds, ...feeds]);
  }

  get getSkip(): number {
    return this.skip;
  }

}
