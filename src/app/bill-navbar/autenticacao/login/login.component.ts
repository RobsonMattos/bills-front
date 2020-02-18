import { Component, OnInit, Output } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

import { AuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  display = 'block';
  @Output() public user: SocialUser;
  @Output() public loggedIn = new EventEmitter<boolean>();

  constructor(
    public router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    
  }

  close() {
    this.display = 'none';
    this.router.navigate(['']);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

    this.authService.authState.subscribe((user) => {
      this.user = user;

      localStorage.setItem('usuario', JSON.stringify(this.user));

      if(user) {
        this.loggedIn.emit(true)
        this.close();
      } else {
        this.loggedIn.emit(false)
      }
    });
  }
 
  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // } 
 
  signOut(): void {
    this.authService.signOut();
  }
}
