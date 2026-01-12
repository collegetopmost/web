import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareUnivercityComponent } from './compare-univercity.component';

describe('CompareUnivercityComponent', () => {
  let component: CompareUnivercityComponent;
  let fixture: ComponentFixture<CompareUnivercityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareUnivercityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareUnivercityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
