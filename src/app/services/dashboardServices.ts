import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class Dashboardservice
{
  constructor(private http: HttpClient) { }

  getAllCovidData() {
  return this.http.get(environment.covidApi);
}
getStatesCovidData() {
  return this.http.get(environment.stateWiseDailyApi);
}
}