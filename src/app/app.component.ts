import { Component } from '@angular/core';
import { MailService } from './mail.service';
import { Http } from '@angular/http';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import * as moment from 'moment'

@Component({
  selector: 'app-root',
  template: `
    <input #name type="text">
    <input #age type="text">
    <button [ngClass]="{ 'hide': true, 'show' :  modeEdit === 'add-new' }" (click)="addUser({name: name.value, age: age.value})">Add new</button>
    <button [ngClass]="{ 'hide': true, 'show' :  modeEdit === 'update'  }" (click)="updateUser({name: name.value, age: age.value})">UPDATE</button>
    <button [ngClass]="{ 'hide': true, 'show' :  modeEdit === 'update'  }" (click)="cancelUpdate(name, age)">CANCEL</button>
    <hr>
    <ul>
      <li *ngFor="let user of items | async">
        <button (click)="removeUser(user)">DELETE</button>
        <button (click)="focusUser(user, name, age)">MODIFY</button>
        Name: {{ user.name }}  Age: {{ user.age }} 
      </li>
    </ul>
  `,
  styles: [
    `
    .hide {
      display:none;
    }
    .show {
      display:inline-block;
    }
    .focus {
      color: blue;
    }
    `
  ]
})
export class AppComponent {
  
  items: FirebaseListObservable<any[]>;
  modeEdit:string = 'add-new';
  userInFocus = {$key:'444'};

 

  constructor(private mail:MailService, af: AngularFire) {
    this.items = af.database.list('/users');
    this.items
      .subscribe((snapshots) => {
        console.log(snapshots)
      });

    // var diff = moment.unix(1481405108).fromNow()

    var a = moment(1481405108);
    var b = moment(1481406684);

    //var diffTime = moment( moment(1481405108).diff( 1481406684) ).format("DD/MM/YYYY hh:mm:ss");

    console.log(a.diff(b, 'm')) //moment.unix(1481405108).format("MM/DD/YYYY hh:mm:ss")

  }

  addUser(newUser) {
    var data = Object.assign(newUser, {
      timestamp: Math.round(+new Date()/1000)
    })

    this.items.push(data);
    console.log(data);
  }

  removeUser(userObj) {
    this.items.remove(userObj);
      console.log(userObj, 'has been removed');
  }

  focusUser(userObj, name, age) {
    this.modeEdit = 'update';
    this.userInFocus = userObj;
    name.value = userObj.name;
    age.value = userObj.age;
  }

  cancelUpdate(name, age){
    this.modeEdit = 'add-new';
    name.value = '';
    age.value = '';
  }

  updateUser(userObj){
    this.items.update(this.userInFocus.$key, userObj);
  }

  getData(){
    console.log(this.items);
  }

}
/*
    this.http.get(this.url)
    .subscribe(
      (res)=> {
        this.users = res.json();
      },
      (err)=> {console.log(err); alert('error')}
    )
  }

 */