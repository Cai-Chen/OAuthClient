import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from './../shell/shell.service';
import { AuthGuard } from '../core/authentication/auth.guard';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
Shell.childRoutes([
    { path: 'resource', component: IndexComponent, canActivate: [AuthGuard] }       
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ResourceRoutingModule { }