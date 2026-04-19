import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTopmostBaseComponent } from './student-topmost-base.component';

describe('StudentTopmostBaseComponent', () => {
  let component: StudentTopmostBaseComponent;
  let fixture: ComponentFixture<StudentTopmostBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTopmostBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTopmostBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
