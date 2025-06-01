import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  users: IUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log('Usuarios cargados:', this.users);
    });
  }
}
