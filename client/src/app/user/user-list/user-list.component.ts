import { Component, OnInit, } from '@angular/core';
import { User } from '../../../models/user.model';
import { UserService } from '../../../service/user.service';
import { NgFor } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../../dialog/dialog-delete/dialog-delete.component';
import { Router, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, MatDialogModule, MatGridListModule, RouterOutlet, MatCardModule, MatButtonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers: [UserService]
})
export class UserListComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService,
    private dialog: MatDialog,
    private route: Router) {

  }

  ngOnInit(): void {
    this.userService.userEvent.subscribe(x => {
      this.users = x
    });
    this.userService.GetAllUsers();
  }
  userDelete = (userId: number | any) => {
    const ref = this.dialog.open(DialogDeleteComponent, {
      data: userId,
      minWidth: '60vh', minHeight: '50wh', disableClose: true,
    })
    ref.afterClosed().subscribe(x => {
      if (x) {
        this.userService.deleteUser(userId)
      }
    })
  }

  AddNewUser() {
    this.route.navigate(['add-user'])
  }

  userDetails(user: User | any) {
    this.route.navigate(['user-details', user.id], { state: user })
  }

}
