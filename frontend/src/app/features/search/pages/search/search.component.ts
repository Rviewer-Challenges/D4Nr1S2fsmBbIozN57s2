import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Observable, Subject } from 'rxjs';

import { Feed } from '@models/feed.model';

import { AuthService } from '@services/auth.service';
import { FeedService } from '@services/feed.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private skip: number = 0;
  private limit: number = 10;
  private query: string = '';
  private loadingNews: Subject<boolean> = new Subject();

  public feeds: Feed[];
  public isLoading: boolean = true;
  constructor(
    private feedService: FeedService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.loadingNews.pipe(debounceTime(1000)).subscribe(() => this.getDataInitial());
  }

  goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({ q: query }) => {
      if(!query) {
        return this.getRandomFeeds();
      }
      if(!query || query.trim().length < 1) return this.router.navigateByUrl('/');
      this.query = query.trim();
      this.goToTop();
      this.loadingNews.next(true);
    });
  }

  getRandomFeeds(): void{
    this.feedService.getFeeds(5, 5, false).subscribe(feeds => {
      this.feeds = feeds;
      this.isLoading = false;
    });
  }

  getDataInitial(): void {
    this.isLoading = true;
    this.skip = 0;
    this.searchFeeds().subscribe({
      next: (feeds) => this.feeds =feeds,
      complete: () => this.isLoading = false,
    })
  }

  resetQuery(value: string): void {
    this.router.navigate(['/search'], { queryParams: { q: value } });
    this.isLoading = true;
    this.query = value;
    this.loadingNews.next(true);
  }

  searchFeeds(): Observable<Feed[]> {
    return this.feedService.searchFeeds(this.skip, this.limit, this.query);
  }

  onScroll(): void {
    this.skip += this.limit;
    if(!this.authService.isAuthenticated() && this.query.length > 1 && this.skip >= this.limit) {
      return this.authService.showModalAuth('init');
    }
    if(this.query.length > 1) {
      this.searchFeeds().subscribe(feeds => this.feeds = [...this.feeds, ...feeds]);
    }
  }

  get getQueryValue(): string {
    return this.query;
  }

}
