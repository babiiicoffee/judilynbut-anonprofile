import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  todayDate = new Date();
  todayYear = this.todayDate.getFullYear();
  todayMonth = this.todayDate.getMonth();
  todayDay = this.todayDate.getDate();

  fromTS = 'this is from ts file sent to html file';
  myName = 'Judilyn S. But-anon';
  myBDay = 30;
  myBMonth = 'July';
  myBYear = 2000;
  myAge = this.todayYear - this.myBYear;
  mySchool = "University of San Carlos";
  myPosition = "Software/Web developer";

  

}
