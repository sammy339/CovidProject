import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import * as Chart from 'chart.js';
import { MatSelectChange } from '@angular/material/select';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  selectedState:any;
  ConfirmedCases:any
  RecoveredCases:any
  DeathCases:any  
  chart:Chart;
  StateNameCodeMap:Map<string,string>;
  
  public context: CanvasRenderingContext2D;
  public states:string[];

  @Input() StatesCovidData;
  @Input() StatesDailyCovidData;
  @ViewChild('myCanvas') myCanvas: ElementRef;
  
  constructor() { }
  ngOnInit(): void {}

  selectState(event: MatSelectChange) {
    this.selectedState = event.value
    let stateCode =  [...this.StateNameCodeMap].find(([key, val]) => val == this.selectedState)[0]
    this.setChartData(stateCode.toLowerCase());

  }

  getChartOption():Chart.ChartOptions
  {
    return {
      responsive: true,
      legend: {
       display:false
      },
      scales: {      
        xAxes: [{
          display: true, 
          ticks:{
            fontColor: 'white',
            fontSize: 12,
          },        
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          display: false,
          ticks:{
          fontColor: 'white',
          fontSize: 14,
          },
          gridLines: {
            display: false
          }
        }],
      }
    }
  }
createStateNameCodeDictionary()
{
  if(this.StateNameCodeMap == null)
    {
     this.StateNameCodeMap = new Map();
     this.StatesCovidData.forEach(element => {          
     this.StateNameCodeMap.set(element.statecode,element.state)});
    }
}
setDefaultSelectedState()
{
  this.states =[...this.StateNameCodeMap.values()];
  this.selectedState = this.states.slice(0,1).toString();
}

setChartData(stateCode:string):void{
  
  let confirmed=[];
  let recovered=[]
  let death=[]
  confirmed=[]
  for (let i = 0; i < this.ConfirmedCases.length; i++) 
  {
    confirmed.push(this.ConfirmedCases[i][stateCode]);
    recovered.push(this.RecoveredCases[i][stateCode]);
    death.push(this.DeathCases[i][stateCode]);
  }
  this.chart.data.datasets[0].data = confirmed;
 this.chart.data.datasets[1].data = recovered;
 this.chart.data.datasets[2].data = death;
  this.chart.update();
}
ngAfterViewInit(): void { 
  
    if(this.StatesDailyCovidData && this.StatesCovidData )
       {
        let recentData = this.StatesDailyCovidData.slice(-21);
        this.ConfirmedCases = recentData.filter(x=>x.status === "Confirmed");
        this.DeathCases= recentData.filter(x=>x.status === "Deceased");
        this.RecoveredCases =recentData.filter(x=>x.status === "Recovered");
        this.createStateNameCodeDictionary();
        this.setDefaultSelectedState();
        let alldates = recentData.map(res => res.date);
        let testDates = []
        alldates.forEach((res) => {
        let jsdate = new Date(res)
        testDates.push(formatDate(jsdate, 'dd-MMM', 'en-US'))
        })
       testDates = [...new Set(testDates)];
     this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
     this.chart = new Chart(this.context,
      {
          type: 'line',
          data: {
            labels: testDates,
            datasets:
            [{
              label:'Confirmed',
              data: [],
              fill:false,
              borderColor:"rgba(118,95,170)"
            },
            { 
              label:'Recovered',
              data: [], 
              fill:false,
              borderColor:"rgba(197,121,174)", 
            },
            { 
              label:'Death',
              data: [],
              fill:false,
              borderColor:"rgba(10,198,243)",
           }]
          },
            options: this.getChartOption(),
      }); 
      
      this.setChartData('mh');

   }
  }
}