import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
     }


  ngOnInit() {
  }

  sendEmail = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    subject : new FormControl(''),
    message : new FormControl('')
  });


  onSend(){
    console.log(this);
  }

}
