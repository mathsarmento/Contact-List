import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public email = '';
  public password = '';
  public showPass: Boolean = false;

  constructor(private authService: AuthService) {}

  public login(): void {
    if (this.email == '') {
      alert('Please enter email!');
      return;
    } else if (this.password == '') {
      alert('Please enter password!');
      return;
    } else {
      this.authService.login(this.email, this.password);
      this.email = '';
      this.password = '';
    }
  }

  public singUp(): void {
    console.log('oi');
  }

  public forgotPass(): void {
    console.log('oi');
  }
}
