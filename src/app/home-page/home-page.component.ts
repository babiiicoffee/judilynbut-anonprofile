import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onEmail() {
    window.open("https://blog.mailtrap.io/angular-send-email/", "_blank");
  }
  onPDF() {
    window.open("https://morioh.com/p/44aeb57cdf81", "_blank");
  }



}
