import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <p [ngClass]="{activa : visible}">
      {{ titulo }}
    </p>
  `,
  styles: [`
  .activa {
    color: blue;
    font-size: 30px;
  }
  `]
})
export class TitleComponent implements OnInit {

  @Input() titulo;
  @Input() visible;

  constructor() { }

  ngOnInit() {
  }

}
