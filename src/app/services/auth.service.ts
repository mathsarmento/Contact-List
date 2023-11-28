import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router
  ) {}

  // LOGIN METHOD

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['home']);
      },
      (err) => {
        var message = '';
        if (err.code == 'auth/invalid-email') {
          message = 'Error! \nThe email address is badly formatted. \nTry again.';
        } else {
          message = err.message;
        }
        alert(message);
        this.router.navigate(['/login']);
      }
    );
  }

  // REGISTER METHOD
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      () => {
        alert('Registration Successful!');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  //SIGN OUT METHOD
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  get isLoggedIn(): boolean {
    const token = JSON.parse(localStorage.getItem('token')!);
    if (token == null) {
      return false;
    } else {
      return true;
    }
  }
}
