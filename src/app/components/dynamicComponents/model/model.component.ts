import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { _User } from '../../../pages/user/uset';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css',
})
export class ModelComponent implements OnInit {
  @Input() userToDelete: _User | undefined;
  @Input() deleteModelMessage: string | undefined;
  @Output() OnConformation: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirm(choice: boolean) {
    this.OnConformation.emit(choice);
  }

  ngOnInit(): void {}
}
