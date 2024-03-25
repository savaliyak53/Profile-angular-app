import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContriesComponent } from './contries.component';

describe('ContriesComponent', () => {
  let component: ContriesComponent;
  let fixture: ComponentFixture<ContriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
