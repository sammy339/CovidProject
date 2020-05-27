import { Component, OnInit } from '@angular/core';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { Dashboardservice } from '../services/dashboardServices';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  faVirus = faVirus;
lastUpdate: Date;
AllData : any[];
TotalData:any;
AllStatesData:any[];
DailyStatesData:any[];


constructor(private dashboardService:Dashboardservice) { }

ngOnInit(): void {
  this.getAllData();
  this.getAllStatesData();
}
getAllData()
{
  this.dashboardService.getAllCovidData()
  .subscribe(data => 
{  
  this.AllData  = data["statewise"];
  this.TotalData = this.AllData.find(x => x.state === "Total");
  this.AllStatesData = this.AllData.filter(x => x.state != "Total");
  this.lastUpdate = this.TotalData["lastupdatedtime"];

})
}

getAllStatesData() {
  this.dashboardService.getStatesCovidData().subscribe(res => {
    this.DailyStatesData = res["states_daily"];
  })
  }


}
