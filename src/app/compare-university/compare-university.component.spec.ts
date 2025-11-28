import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareUniversityComponent } from './compare-university.component';

describe('CompareUniversityComponent', () => {
  let component: CompareUniversityComponent;
  let fixture: ComponentFixture<CompareUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareUniversityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
