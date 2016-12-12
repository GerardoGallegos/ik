import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  template: `
    <div>
      <button (click)="click()">{{ !visible }}</button>
    </div>
  `,
  styles: []
})
export class HijoComponent implements OnInit {

  visible = false;

  @Output()
  toggle = new EventEmitter<boolean>();

  click(){
    this.visible = !this.visible;
    this.toggle.emit(this.visible);
  }

  constructor() { }

  ngOnInit() {
  }

}
