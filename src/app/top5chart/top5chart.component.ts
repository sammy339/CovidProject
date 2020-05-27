import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as Chart from 'chart.js';
@Component({
  selector: 'app-top5chart',
  templateUrl: './top5chart.component.html',
  styleUrls: ['./top5chart.component.css']
})
export class Top5chartComponent implements OnInit {

  @Input() AllStatesCovidData;
  chart:Chart;
  @ViewChild('myCanvas') myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor() { }
  ngOnInit(): void {}
  ngAfterViewInit(): void { 

    if(this.AllStatesCovidData)
    {
     var topStates = this.AllStatesCovidData.sort((a, b) => b['confirmed']-a['confirmed']).slice(0,5);
     var stateNames = topStates.map(a=>a.state);
     var confirmedData = topStates.map(a=>a.confirmed);
     var recoveredData = topStates.map(a=>a.recovered);
     var deathData = topStates.map(a=>a.deaths);
     this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
     this.chart = new Chart(this.context, 
{
  type: 'horizontalBar',
  data: {
    labels: stateNames,
    datasets: [
      {
         label:'Confirmed',
        data: confirmedData,
        backgroundColor: "rgba(118,95,170)",
      },
      { 
        label:'Recovered',
        data: recoveredData,
        backgroundColor:"rgba(197,121,174)", 
      },
      { 
        label:'Death',
        data: deathData,
        backgroundColor:"rgba(10,198,243)", 
      },
    ]
  },
  options: {
    legend: {
      display: true,      
      onClick: (e) => e.stopPropagation(),
      labels: {
        fontColor: 'rgb(255, 255, 255)',
    }
    },
    scales: {      
      xAxes: [{
        display: true,        
        stacked:true,
        ticks:{
          fontColor: 'white',
          fontSize: 12,
        },        
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        display: true,
        stacked:true,
        ticks:{
        fontColor: 'white',
        fontSize: 14,
        beginAtZero: true
        },
        gridLines: {
          display: true
        }
      }],
    }
  }
});

   }
}
}
