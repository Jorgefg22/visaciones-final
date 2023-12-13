import { Component } from '@angular/core';



@Component({
  selector: 'app-formtwo',
  templateUrl: './formtwo.component.html',
  styleUrls: ['./formtwo.component.css'],
  
})
export class FormtwoComponent {

  myClass = 'initial-class';

  updateClass() {
    // Add or toggle the desired class based on some condition
    this.myClass = this.myClass === 'initial-class' ? 'new-class' : 'initial-class';
  }
}
