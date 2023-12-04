import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ScrollService } from '../scroll.service';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: NgModel;
  @ViewChild('emailField') emailField!: NgModel;
  @ViewChild('messageField') messageField!: NgModel;
  @ViewChild('contact') contact: ElementRef

  contactPosition: number
  formActive: boolean = false
  messageSent:boolean
  emailRegex: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\u0022(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\u0022)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


  formData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false // Assuming it's a boolean value
  };


  fieldStatus = {
    name: undefined,
    email: undefined,
    message: undefined,
    privacyPolicy: undefined,
    allFieldsValid: undefined,

  };



  constructor(public sS: ScrollService, public dS: DataServiceService) {
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  activateValidation() {
    this.formActive = true
  }


  @HostListener('window:resize')
  onResize() {
    this.sendToDataService()
  }


  getContactPosition() {
    this.contactPosition = this.sS.getElementPosition(this.contact)
    this.dS.contactPosition = this.contactPosition
  }


  sendToDataService() {
    this.getContactPosition()
  }

  updateAllFieldsValid() {
    if (this.fieldStatus.name && this.fieldStatus.email && this.fieldStatus.message && this.fieldStatus.privacyPolicy) {
      this.fieldStatus.allFieldsValid = true
    } else
      this.fieldStatus.allFieldsValid = false
  }

  resetInputs() {
    this.formData = {
      name: '',
      email: '',
      message: '',
      privacyPolicy: false
    };

    this.fieldStatus = {
      name: false,
      email: false,
      message: false,
      privacyPolicy: false,
      allFieldsValid: false
    };
    this.formActive = false

  }

  async sendMail() {
    console.log('sending mail', this.myForm);
    this.disableForm();
    await this.sending();
    this.enableForm();
    this.resetInputs()
  
  }


  disableForm() {
    this.nameField.control.disable();
    this.emailField.control.disable();
    this.messageField.control.disable();
  }


  enableForm() {
    this.nameField.control.enable();
    this.emailField.control.enable();
    this.messageField.control.enable();
  }


  async sending() {
    try {
      let fd = new FormData();
      fd.append('name', this.formData.name);
      fd.append('email', this.formData.email);
      fd.append('message', this.formData.message);

      const response = await fetch('https://daniel-blem.de/send_mail.php', {
        method: 'POST',
        body: fd,
        mode: 'cors',
      });

      if (!response.ok) {
        console.error('Error:', response.statusText);
        // Hier kannst du weitere Fehlerbehandlung durchführen
      } else {
        console.log('Mail sent successfully');
        this.messageSent = true
        setTimeout(() => {
          this.messageSent = false
        }, 3000);

      }
    } catch (err) {
      console.error('Error:', err);
      // Hier kannst du weitere Fehlerbehandlung durchführen
    }
  }


}

