import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StmBannerComponent } from './stm-banner.component';

describe('StmBannerComponent', () => {
  let component: StmBannerComponent;
  let fixture: ComponentFixture<StmBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StmBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StmBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
