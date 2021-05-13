import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AppConfig } from './shared/config/app.config';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ResourceModule } from './resource/resource.module';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';
import { AppConfigFactory } from './shared/factory/app.config.factory';

@NgModule({
  declarations: [
    AppComponent,
    AuthCallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    AccountModule,
    ResourceModule,
    AppRoutingModule,
    ShellModule,
    SharedModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: AppConfigFactory,
      deps: [AppConfig],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
