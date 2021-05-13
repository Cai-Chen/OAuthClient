import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppSetting } from './appsetting.model';

@Injectable({ providedIn: 'root' })
export class AppConfig {
    static AppSetting: IAppSetting;
    private configFile = '/assets/config/appsettings.json';

    constructor(private http: HttpClient) { }
    load() {
        return new Promise((resolve, reject) => {
            this.http
                .get<IAppSetting>(this.configFile)
                .toPromise()
                .then((response) => {
                    AppConfig.AppSetting = response;
                    resolve(true);
                })
                .catch((response: any) => {
                    reject(
                        `Could not load file ‘${this.configFile}’: ${JSON.stringify(
                            response
                        )}`
                    );
                });
        });
    }
}