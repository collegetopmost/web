import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallaryDialogComponent } from './gallary-dialog.component';

describe('GallaryDialogComponent', () => {
  let component: GallaryDialogComponent;
  let fixture: ComponentFixture<GallaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallaryDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
