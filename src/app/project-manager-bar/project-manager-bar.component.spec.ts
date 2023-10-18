import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagerBarComponent } from './project-manager-bar.component';

describe('ProjectManagerBarComponent', () => {
  let component: ProjectManagerBarComponent;
  let fixture: ComponentFixture<ProjectManagerBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectManagerBarComponent]
    });
    fixture = TestBed.createComponent(ProjectManagerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
