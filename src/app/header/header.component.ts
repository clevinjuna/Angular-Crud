import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UserId = localStorage['userId']

  constructor(private userService:UserService) { 
    this.UserId
  }

  ngOnInit(): void {

  }
  ngDeconnexion() {
    this.userService.deco();
  }
}
