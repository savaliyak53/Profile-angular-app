import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { debounceTime, fromEvent, map, throttleTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() placeholder: string;
  @Input() totalItem: number;
  @Input() itemsCount: number;
  @Input() icon: string;
  @Output() search = new EventEmitter<string>();

  searching(): void {
    const inputElement = document.querySelector(
      'input[name="searchField"]'
    ) as HTMLInputElement;
    if (inputElement) {
      fromEvent(inputElement, 'input')
        .pipe(
          debounceTime(1000), // Throttle time in milliseconds
          map((event: Event) => (event.target as HTMLInputElement).value)
        )
        .subscribe((value: string) => {
          this.search.emit(value);
        });
    }
  }
}
