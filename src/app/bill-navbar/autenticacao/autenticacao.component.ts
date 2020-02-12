import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'bill-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoComponent implements OnInit {

  // isLoggedIn$: boolean;
  // isLoggedIn$: Observable<boolean>;
  @Input() user: SocialUser;

  constructor() { }

  // get logged() {
  //   // this.loginService.usuarioLogado.subscribe(
  //   //   value => {
  //   //     this.usuario = value;
  //   //   }
  //   // );
  //   return this.isLoggedIn$;
  // } 

  ngOnInit() {
    // this.isLoggedIn$ = true;
    // this.isLoggedIn$ = this.loginService.isLoggedIn;
    // this.loginService.usuarioLogado.subscribe(
    //   value => {
    //     this.usuario = value;
    //   }
    // );
  }

  logout() {
    // this.loginService.logout();
  }

}
