import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FullComponent } from './full/full.component';
import { BlankComponent } from './blank/blank.component';



@NgModule({
  declarations: [
    SidebarComponent,
    FullComponent,
    BlankComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
  