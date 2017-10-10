import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDVnmDkKMP0XMWhmEf1IfGXk4HSQAq1Vk8',
      authDomain: 'angular-4-training.firebaseapp.com',
    });
  }

}
