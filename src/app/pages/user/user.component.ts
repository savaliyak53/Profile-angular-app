import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModelComponent } from '../../components/dynamicComponents/model/model.component';
import { _User } from './uset';
import { UserServiceService } from '../../service/user/user-service.service';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CommonModule, ModelComponent],
})
export class UserComponent implements OnInit {
  showConfirmDeleteComponent: boolean = false;
  deleteToUser: _User | undefined;
  deleteModelMessage: string = 'Are you sure you want to delete the user: ';
  users: any;

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.getProduct().subscribe((ref) => {
      if (ref) {
        this.users = ref;
      }
    });
  }

  deleteUser(user: _User) {
    this.showConfirmDeleteComponent = true;
    this.deleteToUser = user;
  }

  OnUserDeletionConfirmed($event: boolean) {
    this.showConfirmDeleteComponent = false;
    if ($event) {
      if (this.deleteToUser) {
        // delete method 1
        const index = this.users.indexOf(this.deleteToUser);
        this.users.splice(index, 1);

        // delete method 2
        // this.users = this.users.filter(
        //   (userData: { id: number | undefined }) =>
        //     userData.id !== this.deleteToUser?.id
        // );
      }
    }
  }
}
