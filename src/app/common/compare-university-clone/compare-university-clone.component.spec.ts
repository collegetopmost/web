import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareUniversityCloneComponent } from './compare-university-clone.component';

describe('CompareUniversityCloneComponent', () => {
  let component: CompareUniversityCloneComponent;
  let fixture: ComponentFixture<CompareUniversityCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareUniversityCloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareUniversityCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
