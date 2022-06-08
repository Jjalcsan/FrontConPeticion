import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroUserComponent } from './otro-user.component';

describe('OtroUserComponent', () => {
  let component: OtroUserComponent;
  let fixture: ComponentFixture<OtroUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtroUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
