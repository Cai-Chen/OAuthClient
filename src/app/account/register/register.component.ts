import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators'
import { AuthService } from '../../core/authentication/auth.service';
import { UserRegistration } from '../../shared/models/user.registration';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  success: boolean;
  error: string;
  userRegistration: UserRegistration = { name: '', email: '', password: '' };
  submitted: boolean = false;

  constructor(private authService: AuthService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
  }

  onSubmit() {

    this.spinner.show();

    this.authService.register(this.userRegistration)
      .subscribe(res => {
        this.spinner.hide();
      }, err => {
        this.error = err.error.map(e => e.description).join('\n');
      }).add(() => {
        this.spinner.hide();
      });
  }
}
