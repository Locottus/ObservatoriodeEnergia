import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NabvarComponent } from './nabvar/nabvar.component';
import { FooterComponent } from './footer/footer.component';
import { BaseComponent } from './base/base.component';


import { DashboardsModule } from '../dashboards/dashboards.module';
import { DashboardComponent } from '../dashboards/dashboard/dashboard.component';


@NgModule({
  declarations: [
    NabvarComponent,
    FooterComponent,
    BaseComponent,
  ],
  imports: [
    DashboardsModule, 
    CommonModule,
    RouterModule,
  ]
})
export class LayoutModule { }
