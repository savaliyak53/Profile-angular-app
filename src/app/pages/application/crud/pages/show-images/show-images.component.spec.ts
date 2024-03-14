import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowImagesComponent } from './show-images.component';

describe('ShowImagesComponent', () => {
  let component: ShowImagesComponent;
  let fixture: ComponentFixture<ShowImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
