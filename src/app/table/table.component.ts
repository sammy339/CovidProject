import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,OnChanges {

  
  public dataSource = new MatTableDataSource([]);
  @Input() AllStatesCovidData;
  displayedColumns: string[] = ['state', 'confirmed', 'recovered', 'deaths'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
    if(changes['AllStatesCovidData'] && this.AllStatesCovidData)
    {
      this.dataSource.data = this.AllStatesCovidData;
      this.dataSource.paginator = this.paginator;

    }
  }

  } 

