import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from './body.routing';
import { DownloadListComponent } from './components/download-list/download-list.component';




@NgModule({
  declarations: [
    DownloadListComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class BodyModule { }
