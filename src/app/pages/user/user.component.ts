import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModelComponent } from '../../components/dynamicComponents/model/model.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CommonModule, ModelComponent],
})
export class UserComponent {
  openModel: boolean = false;
  users = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      company: 'ABC Corporation',
      salary: 50000,
      job: 'Software Engineer',
    },
    {
      id: 2,
      name: 'Jane',
      surname: 'Smith',
      company: 'XYZ Inc.',
      salary: 60000,
      job: 'Data Analyst',
    },
    {
      id: 3,
      name: 'Michael',
      surname: 'Johnson',
      company: 'LMN Technologies',
      salary: 70000,
      job: 'Product Manager',
    },
    {
      id: 4,
      name: 'Emily',
      surname: 'Williams',
      company: 'PQR Solutions',
      salary: 55000,
      job: 'UX/UI Designer',
    },
    // Add more users as needed
  ];

  deleteUser() {
    this.openModel = !this.openModel;
  }
}
