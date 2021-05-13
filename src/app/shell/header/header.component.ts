import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name: string;
  isAuthenticated: boolean;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.name = this.authService.name;
    this.isAuthenticated = this.authService.isAuthenticated();
  } 

   async signout() {
    await this.authService.signout();     
  }
}
