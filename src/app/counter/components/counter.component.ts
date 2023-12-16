import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  public counter:number = 10;

  ChangeValue(value:number){
    if(value == 10)
      this.counter = 10;
    else
      this.counter+=value;
  }

}
