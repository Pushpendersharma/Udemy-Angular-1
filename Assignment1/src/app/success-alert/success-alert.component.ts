import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<h5>Success Alert</h5><p class="success">Success, Everything is fine!',
  styles: [`.success,h5{
    color : green;
  }
  p{
    padding:20px;
    background-color:rgb(211, 165, 38)
  }`]
})
export class SuccessAlertComponent {

}
