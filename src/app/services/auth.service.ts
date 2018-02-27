import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }
  get isUserEmailLoggedIn():boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
           return true
    } else {
         return false
    }
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  signUpWithEmail(email: string, password: string) {
    //noinspection TypeScriptUnresolvedFunction
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error);
        throw error
      });
  }

  loginWithEmail(email: string, password: string) {
    //noinspection TypeScriptUnresolvedFunction
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        localStorage.setItem('islogin','true');
      })
      .catch(error => {
        console.log(error);
        throw error
      });
  }
  signOut(): void {
    this.afAuth.auth.signOut();
    localStorage.removeItem('islogin');
    this.router.navigate(['/']);
  }

}
