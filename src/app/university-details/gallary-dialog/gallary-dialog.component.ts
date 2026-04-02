import { Component, Inject,OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gallary-dialog',
   standalone: true, 
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './gallary-dialog.component.html',
  styleUrl: './gallary-dialog.component.scss'
})
export class GallaryDialogComponent {
    images: string[] = [];
  currentIndex = 0;

  touchStartX = 0;
  touchEndX = 0;

  constructor(
    private dialogRef: MatDialogRef<GallaryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.images = data.images;
    this.currentIndex = data.index;
  }

  close() {
    this.dialogRef.close();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }

  // 🔥 MOBILE SWIPE
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    const diff = this.touchStartX - this.touchEndX;

    if (diff > 50) this.next();
    else if (diff < -50) this.prev();
  }

}
