import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderSeriveComponent } from './loader-serive.component';

describe('LoaderSeriveComponent', () => {
  let component: LoaderSeriveComponent;
  let fixture: ComponentFixture<LoaderSeriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderSeriveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderSeriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
