import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ScrollService } from '../scroll.service';
import { DataServiceService } from '../data-service.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: NgModel;
  @ViewChild('emailField') emailField!: NgModel;
  @ViewChild('messageField') messageField!: NgModel;
  @ViewChild('contact') contact!: ElementRef

  contactPosition!: number
  formActive: boolean = false
  messageSent!: boolean
  emailRegex: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\u0022(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\u0022)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


  formData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false
  };


  fieldStatus = {
    name: false,
    email: false,
    message: false,
    privacyPolicy: false,
    allFieldsValid: false

  };



  constructor(public sS: ScrollService, public dS: DataServiceService, private viewportScroller: ViewportScroller) {
  }


  @HostListener('window:resize')
  onResize() {
    this.sendToDataService()
  }


  sendToDataService() {
    this.getContactPosition()
  }


  getContactPosition() {
    this.contactPosition = this.sS.getElementPosition(this.contact)
    this.dS.contactPosition = this.contactPosition
  }


  async sendMail() {
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
      await this.fetchData()
    } catch (err) {
      console.error('Error:', err);
    }
  }


  async fetchData() {
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
      alert('Something went wrong, please sent a E-Mail to d.blem93@gmail.com')
    } else {
      this.toggleMailSent()
    }
  }


  toggleMailSent() {

    this.messageSent = true
    setTimeout(() => {
      let message = document.getElementById('messageSent')
      message.scrollIntoView()
    }, 200);
    setTimeout(() => {
      this.messageSent = false
    }, 3000);
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


  activateValidation() {
    this.formActive = true
  }

  scrollToElement(elementId: string) {
    this.viewportScroller.scrollToAnchor(elementId);
  }



}

