import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppaaComponent } from './appaa.component';

describe('AppaaComponent', () => {
  let component: AppaaComponent;
  let fixture: ComponentFixture<AppaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppaaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
