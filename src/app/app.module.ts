import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './account/account.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
/* Module Imports */
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ResourceModule } from './resource/resource.module';
import { ConfigService } from './shared/config.service';
import { SharedModule } from './shared/shared.module';
import { ShellModule } from './shell/shell.module';
import { TopSecretModule } from './top-secret/top-secret.module';

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
    TopSecretModule,
    ResourceModule, 
    AppRoutingModule,
    ShellModule,   
    SharedModule    
  ],
  providers: [
    ConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
