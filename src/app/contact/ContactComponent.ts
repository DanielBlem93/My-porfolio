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
  @ViewChild('myForm') myForm!: NgForm;
  @ViewChild('nameField') nameField!: NgModel;
  @ViewChild('emailField') emailField!: NgModel;
  @ViewChild('messageField') messageField!: NgModel;
  @ViewChild('contact') contact: ElementRef

  contactPosition

  formData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false // Assuming it's a boolean value
  };


  fieldStatus = {
    name: false,
    email: false,
    message: false,
    privacyPolicy: false,
    allFieldsValid: false
  };


  constructor(public sS: ScrollService, public dS: DataServiceService) {
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sendToDataService()
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
    // Check if all individual fields are valid
    this.fieldStatus.allFieldsValid = this.fieldStatus.name && this.fieldStatus.email && this.fieldStatus.message && this.fieldStatus.privacyPolicy;
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
        // Hier kannst du weitere Aktionen nach erfolgreicher Übermittlung durchführen
      }
    } catch (err) {
      console.error('Error:', err);
      // Hier kannst du weitere Fehlerbehandlung durchführen
    }
  }
}

