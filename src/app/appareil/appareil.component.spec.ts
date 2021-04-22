import { ComponentFixture, TestBed } from '@angular/core/testing';

import { appareilComponent } from './appareil.component';

describe('appareilComponent', () => {
  let component: appareilComponent;
  let fixture: ComponentFixture<appareilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ appareilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(appareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
