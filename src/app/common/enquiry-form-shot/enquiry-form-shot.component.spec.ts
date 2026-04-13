import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryFormShotComponent } from './enquiry-form-shot.component';

describe('EnquiryFormShotComponent', () => {
  let component: EnquiryFormShotComponent;
  let fixture: ComponentFixture<EnquiryFormShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnquiryFormShotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquiryFormShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
