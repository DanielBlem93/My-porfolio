import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

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

  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  async sendMail() {
    console.log('sending mail', this.myForm);
    this.disableForm();
    await this.sending();
    this.enableForm();
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
