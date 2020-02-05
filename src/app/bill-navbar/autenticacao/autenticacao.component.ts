import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'bill-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoComponent implements OnInit {

  isLoggedIn$: boolean;
  // isLoggedIn$: Observable<boolean>;
  // usuario: UsuarioModel;

  constructor() { }

  get logged() {
    // this.loginService.usuarioLogado.subscribe(
    //   value => {
    //     this.usuario = value;
    //   }
    // );
    return this.isLoggedIn$;
  } 

  ngOnInit() {
    this.isLoggedIn$ = true;
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
