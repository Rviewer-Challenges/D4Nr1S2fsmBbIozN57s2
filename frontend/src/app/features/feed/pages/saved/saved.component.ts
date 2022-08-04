import { Component, OnInit } from '@angular/core';
import { Feed } from '@models/feed.model';
import { FeedService } from '@services/feed.service';
import { debounceTime, map, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {
  private skip: number = 0;
  private limit: number = 10;
  public feeds: Feed[];
  public isLoading: boolean = true;
  private loadingNews: Subject<boolean> = new Subject();

  constructor(
    private feedService: FeedService,
  ) {
    this.loadingNews.pipe(debounceTime(2000)).subscribe(() => this.getFeedsSaved());
  }

  ngOnInit(): void {
    this.loadingNews.next(true);
  }

  getFeedsSaved() {
    this.isLoading = true;
    this.getSavedFeeds().subscribe({
      next: (feeds) => this.feeds = feeds,
      complete: () => this.isLoading = false,
    });
  }

  getSavedFeeds(): Observable<Feed[]> {
    return this.feedService.getSavedFeeds(this.skip, this.limit).pipe(map(feeds => feeds));
  }

  onScroll() {
    this.skip += this.limit;
    this.getSavedFeeds().subscribe(feeds => {
      console.log({feeds});
      this.feeds = [...this.feeds, ...feeds];
    })
  }

}
