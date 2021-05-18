import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { catchError } from 'rxjs/operators';
import { AppConfig } from 'src/app/shared/config/app.config';
import { IAppSetting } from 'src/app/shared/config/appsetting.model';
import { BaseService } from "../../shared/base.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  private _appSetting: IAppSetting = AppConfig.AppSetting;
  private manager = new UserManager(this.getClientSettings());
  private user: User | null;

  constructor(private http: HttpClient) {
    super();
  }

  login() {
    return this.manager.signinRedirect();
  }

  async completeAuthentication() {
    this.user = await this.manager.signinRedirectCallback();
    localStorage.setItem('accessToken', this.user.access_token);
    localStorage.setItem('name', this.user.profile.name);
  }

  register(userRegistration: any) {
    return this.http.post(this._appSetting.oauth2.authority + '/api/account', userRegistration);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('accessToken') != null;
  }

  get authorizationHeaderValue(): string {
    return localStorage.getItem('accessToken');
  }

  get name(): string {
    return localStorage.getItem('name');
  }

  async signout() {
    await this.manager.signoutRedirect();
    localStorage.clear();
  }

  getClientSettings(): UserManagerSettings {
    return {
      authority: this._appSetting.oauth2.authority,
      client_id: 'web_client_1',
      redirect_uri: this._appSetting.oauth2.redirect_uri,
      post_logout_redirect_uri: this._appSetting.oauth2.post_logout_redirect_uri,
      response_type: "id_token token",
      scope: "openid profile api1",
      filterProtocolClaims: true,
      loadUserInfo: true,
      automaticSilentRenew: true
    };
  }
}
