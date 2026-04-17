import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeBaseComponent } from './college-base.component';

describe('CollegeBaseComponent', () => {
  let component: CollegeBaseComponent;
  let fixture: ComponentFixture<CollegeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegeBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
