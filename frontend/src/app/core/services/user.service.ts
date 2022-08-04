import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import Storage from '@utils/storage.util';
import { IUser } from '@interfaces/user.interface';
import { map, Observable } from 'rxjs';
import { IResponseUser } from '@interfaces/response.interface';
import { AuthService } from './auth.service';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get headers() {
    return {
      headers: {
        'x-token': Storage.getItem('x-token'),
      },
    };
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  modifyPreferences(resourceID: string, filter: 'subscription' | 'read' | 'saved') {
    const url = `${base_url}/user/${filter}/${resourceID}`;
    return this.http.patch(url, {}, this.headers);
  }

  setTheme(darkMode: boolean): void {
    const url = `${base_url}/user/theme`;
    this.http.patch(url, { darkMode }, this.headers).subscribe();
  }

  updateUserInfo(data: IUser): Observable<boolean> {
    const url = `${base_url}/user`;
    return this.http.patch<IResponseUser>(url, data, this.headers).pipe(map(resp => {
      this.authService.setNewUserInfo(data.name, data.lastName);
      return resp.ok;
    }));
  }

}
