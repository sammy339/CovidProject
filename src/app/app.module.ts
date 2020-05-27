import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule}  from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Dashboardservice } from './services/dashboardServices';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ChartsModule } from 'ng2-charts';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { ChartComponent } from './chart/chart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Top5chartComponent } from './top5chart/top5chart.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    TableComponent,
    ChartComponent,
    HomepageComponent,
    Top5chartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    ChartsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatPaginatorModule
  ],
  providers: [Dashboardservice,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
