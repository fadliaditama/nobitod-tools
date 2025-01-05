import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body.routing';
import { DownloadListComponent } from './components/download-list/download-list.component';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    DownloadListComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    MatSelectModule
  ]
})
export class BodyModule { }
