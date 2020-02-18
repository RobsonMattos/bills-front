import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SocialUser, AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'bill-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.scss']
})
export class AutenticacaoComponent implements OnInit {

  @Input() user: SocialUser;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  logout() {
    console.log('logoff');
    this.authService.signOut();
    localStorage.removeItem('usuario');
    this.user = null;
    this.router.navigate(['']);
  }

}
