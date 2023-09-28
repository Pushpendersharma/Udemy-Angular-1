import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p class="warning">Warning, Something is wrong!',
  styles: [`.warning{
    color : red;
  }`]
})
export class WarningAlertComponent {

}
