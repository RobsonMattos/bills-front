import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'bill-login-full',
  templateUrl: './login-full.component.html',
  styleUrls: ['./login-full.component.scss']
})
export class LoginFullComponent implements OnInit {

  @Output() public user: SocialUser;
  @Output() public loggedIn = new EventEmitter<boolean>();

  constructor(
    public router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    
  }

  close() {
    this.router.navigate(['']);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    this.authService.authState.subscribe((user) => {
      this.user = user;

      // localStorage.setItem('usuario', JSON.stringify(this.user));
      sessionStorage.setItem('usuario', JSON.stringify(this.user));

      if(user) {
        this.loggedIn.emit(true)
        this.close();
      } else {
        this.loggedIn.emit(false)
      }
    });
  }
}
