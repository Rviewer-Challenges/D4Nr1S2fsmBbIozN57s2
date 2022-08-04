import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'environments/environment';

import { Website } from '@models/website.model';
import { IResponseWebsite } from '@interfaces/response.interface';

import { AuthService } from './auth.service';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private http: HttpClient,
    private authService: AuthService) { }

  getWebsites(all: boolean = false, skip: number = 0, limit: number = 5): Observable<Website[]> {
    const url = `${base_url}/website?all=${all}&limit=${limit}&skip=${skip}`;
    return this.http.get<IResponseWebsite>(url).pipe(map(resp => {
      const { websites } = resp;
      const userActive = this.authService.getUserActive;
      if(userActive) {
        const { subscriptions } = userActive;
        websites.map(website => website.inUser = subscriptions?.includes(website._id));
      }
      return resp.websites
    }));
  }

}
