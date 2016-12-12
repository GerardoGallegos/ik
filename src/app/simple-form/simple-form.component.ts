import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MailService } from '../mail.service';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-simple-form',
  template: `<div>
    <input #myInput type="text" [(ngModel)]="message"/>
    <button (click)="update.emit({text: message})">Click me!</button>  

    <h1>{{ literal }} - {{ dinamico }}</h1>
    <hr>
  </div>`,
  styles: []
})
export class SimpleFormComponent implements OnInit {


  @Input() message;
  @Input() literal;
  @Input() dinamico;

  @Output() update = new EventEmitter();

  constructor(private mail:MailService) {
  }

  onClick(input){
    console.log(input);  
  }

  ngOnInit() {
  }

}


