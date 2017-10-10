import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) { }

  SignUp(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  SignIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      firebase.auth().currentUser.getIdToken().then((token: string) => {
        this.router.navigate(['/']);
        this.token = token;
      });
    }).catch(error => {
      alert(error.message);
    });
  }

  GetToken() {
    firebase.auth().currentUser.getIdToken().then((token: string) => {
      this.token = token;
    });
    return this.token;
  }

  IsAuthenticated() {
    return this.token != null;
  }

  Logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin']);
  }
}

