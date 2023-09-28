import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<h5>Warning Alert</h5><p class="warning">Warning, Something is wrong!',
  styles: [`.warning,h5{
    color : red;
  }
  p{
    padding:20px;
    background-color:rgb(211, 165, 38)
  }`]
})
export class WarningAlertComponent {

}
