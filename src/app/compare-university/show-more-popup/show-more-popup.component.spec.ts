import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMorePopupComponent } from './show-more-popup.component';

describe('ShowMorePopupComponent', () => {
  let component: ShowMorePopupComponent;
  let fixture: ComponentFixture<ShowMorePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMorePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMorePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
