import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsFormComponent } from './continents-form.component';

describe('ContinentsFormComponent', () => {
  let component: ContinentsFormComponent;
  let fixture: ComponentFixture<ContinentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
