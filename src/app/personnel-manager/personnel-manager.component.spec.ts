import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelManagerComponent } from './personnel-manager.component';

describe('PersonnelManagerComponent', () => {
  let component: PersonnelManagerComponent;
  let fixture: ComponentFixture<PersonnelManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnelManagerComponent]
    });
    fixture = TestBed.createComponent(PersonnelManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
