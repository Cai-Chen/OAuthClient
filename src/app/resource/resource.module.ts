import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ResourceRoutingModule } from './resource.routing-module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    SharedModule
  ]
})
export class ResourceModule { }
