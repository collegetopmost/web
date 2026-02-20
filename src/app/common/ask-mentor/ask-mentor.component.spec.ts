import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskMentorComponent } from './ask-mentor.component';

describe('AskMentorComponent', () => {
  let component: AskMentorComponent;
  let fixture: ComponentFixture<AskMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskMentorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
