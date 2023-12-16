import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Goku','Gohan'];
  public heroDel : string|undefined = undefined;

  DelHeroe(){
    this.heroDel = this.heroNames.pop();
  }
}
