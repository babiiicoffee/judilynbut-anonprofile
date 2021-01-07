import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  sendEmail;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.sendEmail = fb.group({
      name: "",
      email: "",
      subject: "",
      message: "",
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

  onSubmit(messageForm){
    console.log(messageForm.value);
    this.contactService.sendEmail(messageForm.value).subscribe(data => {
      console.log(data);
    });
  }

}
