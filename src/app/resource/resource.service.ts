import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../shared/base.service';
import { AppConfig } from '../shared/config/app.config';
import { IAppSetting } from '../shared/config/appsetting.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService extends BaseService {
  private _appSetting: IAppSetting = AppConfig.AppSetting;

  constructor(private http: HttpClient) {
    super();
  }

  getResouce(token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      })
    };

    return this.http.get(this._appSetting.api.apiUrl + '/resource/get', httpOptions).pipe(catchError(this.handleError));
  }
}