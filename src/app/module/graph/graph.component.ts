import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  worldData : any ='';
  constructor(private appService: AppService) { }
  
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.appService.getCovidData().subscribe((getCovidData) => {
      this.worldData = getCovidData;
    });
  }

  
  

}
