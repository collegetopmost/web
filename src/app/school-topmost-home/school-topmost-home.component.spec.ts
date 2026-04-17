import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolTopmostHomeComponent } from './school-topmost-home.component';

describe('SchoolTopmostHomeComponent', () => {
  let component: SchoolTopmostHomeComponent;
  let fixture: ComponentFixture<SchoolTopmostHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolTopmostHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolTopmostHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
