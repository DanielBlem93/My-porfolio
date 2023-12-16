import { Component } from '@angular/core';

/**
 * Component for displaying the introduction section.
 */
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  /**
   * Opens the default email client to send an email to the specified address.
   * @param address - The email address to send the email to.
   */
  sendEmail(address: string): void {
    window.location.href = 'mailto:' + address;
  }
}
