import { Component } from '@angular/core';
import { User } from 'firebase';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  socialuser: SocialUser;

  onActivate(componentReference) {
    // console.log(componentReference)
    // componentReference.anyFunction();

    // this.socialuser = JSON.parse(localStorage.getItem('usuario'));
    this.socialuser = JSON.parse(sessionStorage.getItem('usuario'));
    // console.log(this.socialuser);
 }
}
