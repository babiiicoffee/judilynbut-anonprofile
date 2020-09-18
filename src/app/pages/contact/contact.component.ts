import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  sendEmail;

  constructor(private fb: FormBuilder) {
    this.sendEmail = fb.group({
      name: "",
      email: "",
      subject: "",
      message: "",
      // name: new FormControl(''),
      // email: new FormControl(''),
      // subject: new FormControl(''),
      // message: new FormControl('')
    })
  }

  public name: string;
  public email: string;
  public subject: string;
  public message: string;
  public sampleForm: string;

  ngOnInit() {
  }

  // sendEmail = new FormGroup({
  //   name : new FormControl(''),
  //   email : new FormControl(''),
  //   subject : new FormControl(''),
  //   message : new FormControl('')
  // });


  onSubmit(messageForm) {

  }

}
