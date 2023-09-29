import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.whiteColor
  {
    color:white;
  }`]
})
export class AppComponent {
  showDetails = false;
  numberArray: number[] = [];
  index=0;
  onClick() {
    this.showDetails = true;
    this.index+=1;
    this.numberArray.push(this.index);
  }
  getColor(index: number): string {
    return index >= 5 ? 'blue' : '';
  }
}
