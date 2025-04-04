import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private readonly userService: UserService) {}

  ngOnInit(): void {
      this.userService.getUsers().pipe(
        tap({
          next: data => this.users = data,
          error: error => console.error('Error al obtener usuarios', error)
        })
      ).subscribe();
  }
}
