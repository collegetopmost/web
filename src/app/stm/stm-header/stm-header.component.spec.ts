import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StmHeaderComponent } from './stm-header.component';

describe('StmHeaderComponent', () => {
  let component: StmHeaderComponent;
  let fixture: ComponentFixture<StmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StmHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
