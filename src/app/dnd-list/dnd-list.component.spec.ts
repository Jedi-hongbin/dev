import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DndListComponent } from './dnd-list.component';

describe('DndListComponent', () => {
  let component: DndListComponent;
  let fixture: ComponentFixture<DndListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DndListComponent]
    });
    fixture = TestBed.createComponent(DndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
