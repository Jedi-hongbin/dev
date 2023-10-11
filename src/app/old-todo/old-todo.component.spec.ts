import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTodoComponent } from './old-todo.component';

describe('OldTodoComponent', () => {
  let component: OldTodoComponent;
  let fixture: ComponentFixture<OldTodoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldTodoComponent]
    });
    fixture = TestBed.createComponent(OldTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
