import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-stm-banner',
  imports: [CommonModule],
  templateUrl: './stm-banner.component.html',
  styleUrl: './stm-banner.component.scss'
})
export class StmBannerComponent {
@Input() banners:any=[]
@Input() bannersMobile:any=[]
isMobile:any
  ngOnInit(): void {
    console.log("StmBannerComponent");
    
    this.isMobile = window.innerWidth <= 768;
   this.startAutoSlide();
 
  }
  setwidth(){
        this.isMobile = window.innerWidth <= 768;
  }
  slideInterval = 10000; // 10 sec



startAutoSlide() {
  this.stopAutoSlide(); // 🔥 important (old clear)

  this.interval = setInterval(() => {
    this.next();
    this.nextMob();
  }, this.slideInterval);
}

stopAutoSlide() {
  if (this.interval) {
    clearInterval(this.interval);
  }
}
currentIndexMobile=0
nextMob() {
  this.currentIndexMobile = (this.currentIndexMobile + 1) % this.bannersMobile.length;
 // this.currentIndex = (this.currentIndex + 1) % this.bannersMobile.length;
  this.startAutoSlide(); // 🔥 reset timer
}

prevMob() {
  this.currentIndexMobile =
    (this.currentIndexMobile - 1 + this.bannersMobile.length) % this.bannersMobile.length;
    //   this.currentIndex =
    // (this.currentIndex - 1 + this.bannersMobile.length) % this.bannersMobile.length;
  this.startAutoSlide(); // 🔥 reset timer
}
currentIndex=0

goTo(i: number) {
  this.currentIndex = i;
 
  this.startAutoSlide(); // 🔥 reset timer
}
goToMob(i: number) {

  this.currentIndexMobile = i;
  this.startAutoSlide(); // 🔥 reset timer
}

next() {
  this.currentIndex = (this.currentIndex + 1) % this.banners.length;
 // this.currentIndex = (this.currentIndex + 1) % this.bannersMobile.length;
  this.startAutoSlide(); // 🔥 reset timer
}
interval: any;
prev() {
  this.currentIndex =
    (this.currentIndex - 1 + this.banners.length) % this.banners.length;
    //   this.currentIndex =
    // (this.currentIndex - 1 + this.bannersMobile.length) % this.bannersMobile.length;
  this.startAutoSlide(); // 🔥 reset timer
}

autoSlide() {
  this.interval = setInterval(() => {
    this.next();
  }, 10000);
}



/* 🔥 SWIPE SUPPORT */
onTouchStart(event: TouchEvent) {
  this.touchStartX = event.changedTouches[0].screenX;
}
touchStartX = 0;
touchEndX = 0;
onTouchEnd(event: TouchEvent) {
  this.touchEndX = event.changedTouches[0].screenX;
  this.handleSwipe();
}

handleSwipe() {
  const diff = this.touchStartX - this.touchEndX;

  if (diff > 50) {
    this.nextMob(); // swipe left
  } else if (diff < -50) {
    this.prevMob(); // swipe right
  }
}
}
