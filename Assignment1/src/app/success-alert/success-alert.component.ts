import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p class="success">Success, Everything is fine!',
  styles: [`.success{
    color : green;
  }`]
})
export class SuccessAlertComponent {

}
