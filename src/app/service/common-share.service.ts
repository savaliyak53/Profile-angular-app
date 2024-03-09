import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonShareService {
  private dataSubject = new BehaviorSubject<string | null>(null);
  data$ = this.dataSubject.asObservable();

  constructor() {}

  setData(data: string): void {
    this.dataSubject.next(data);
  }
}
