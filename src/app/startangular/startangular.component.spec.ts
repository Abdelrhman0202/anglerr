import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartangularComponent } from './startangular.component';

describe('StartangularComponent', () => {
  let component: StartangularComponent;
  let fixture: ComponentFixture<StartangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
