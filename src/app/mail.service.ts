import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  title = 'Hola soy el titulo';

  messages = [
    'YOu are the best',
    'it is cool',
    'todo trabaja'
  ]

  constructor() { }

}
