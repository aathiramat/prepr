import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { faSearch, faX, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent{name = 'Angular';
@ViewChild('staticTabs', { static: false }) staticTabs?: TabsetComponent;
faChevronRight = faChevronRight;
// Pie
public pieChartOptions: ChartOptions<'pie'> = {
  responsive: false,
};
public pieChartLabels = [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ];
public pieChartDatasets = [ {
  data: [ 300, 500, 100 ]
} ];
public pieChartLegend = true;
public pieChartPlugins = [];

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Project Submitted', 'Project Created', 'Invited', 'Followed' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 13, 15, 13, 0, 59 ], label: 'Progress',   backgroundColor: ["#08714E", "#13A859", "#4DDB73","#A3F9A9", "#F3F4F8"] }
    ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout:90,
  };

  public doughnutColors:Array<any>=[
    { // dark grey
         backgroundColor: '#055E49',
         borderColor: '#055E49',
         pointBackgroundColor: '#055E49',
         pointBorderColor: '#055E49',
         pointHoverBackgroundColor: '#055E49',
         pointHoverBorderColor: 'rgba(77,83,96,1)'
       },
       { // dark grey
         backgroundColor: 'red',
         borderColor: '#F97300',
         pointBackgroundColor: 'rgba(77,83,96,1)',
         pointBorderColor: '#fff',
         pointHoverBackgroundColor: '#fff',
         pointHoverBorderColor: 'rgba(77,83,96,1)'
       },
       { // dark grey
        backgroundColor: 'red',
        borderColor: '#F97300',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)'
      }
      ]; 

  constructor() {
  }
}
