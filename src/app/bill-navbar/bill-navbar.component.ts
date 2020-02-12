import { Component, OnInit, Input } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-bill-navbar',
  templateUrl: './bill-navbar.component.html',
  styleUrls: ['./bill-navbar.component.scss']
})
export class BillNavbarComponent implements OnInit {

  @Input() user: SocialUser;

  constructor() { }

  ngOnInit() {
  }

}
