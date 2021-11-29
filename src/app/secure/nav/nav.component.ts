import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import {Emitters} from '../../emitters/emitters';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user!: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  logout(): void {
    this.authService.logout().subscribe(
      res => console.log(res)
    );
  }
}
