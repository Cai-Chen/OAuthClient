import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ResourceRoutingModule } from './resource.routing-module';
import { SharedModule } from '../shared/shared.module';
import { ResourceService } from './resource.service';

@NgModule({
  declarations: [IndexComponent],
  providers: [ResourceService],
  imports: [
    CommonModule,
    ResourceRoutingModule,
    SharedModule
  ]
})
export class ResourceModule { }
