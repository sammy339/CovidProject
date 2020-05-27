import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnChanges {

@Input() TotalCovidData;  
totalConfirmed: number;
totalRecovered: number;
totalDeath: number;

  ngOnInit(): void {
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes['TotalCovidData'] && this.TotalCovidData)
    {
     this.totalConfirmed = this.TotalCovidData["confirmed"];
     this.totalDeath = this.TotalCovidData["deaths"];
     this.totalRecovered = this.TotalCovidData["recovered"];
    }
  }


}


