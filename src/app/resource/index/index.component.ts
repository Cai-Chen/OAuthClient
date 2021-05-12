import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'resource-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {

  claims = null;
  busy: boolean;

  constructor(private authService: AuthService, private resourceService: ResourceService, private spinner: NgxSpinnerService) {
  }

  ngOnInit() {
    this.busy = true;
    this.spinner.show();
    this.resourceService.fetchTopSecretData(this.authService.authorizationHeaderValue)
      .pipe(finalize(() => {
        this.spinner.hide();
        this.busy = false;
      })).subscribe(
        result => {
          this.claims = result;
        });
  }

}
