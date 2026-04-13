import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrestQuestionComponent } from './intrest-question.component';

describe('IntrestQuestionComponent', () => {
  let component: IntrestQuestionComponent;
  let fixture: ComponentFixture<IntrestQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntrestQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
