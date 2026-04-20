import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StmBannerComponent } from '../stm/stm-banner/stm-banner.component';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-school-topmost-home',
  imports: [StmBannerComponent,CommonModule],
  templateUrl: './school-topmost-home.component.html',
  styleUrl: './school-topmost-home.component.scss'
})
export class SchoolTopmostHomeComponent {
isMenuOpen = false;
isSearchOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

openSearch() {
  this.isSearchOpen = true;
}
  ngOnInit(): void {

this.getListBanner()
   this.loop();
  }
   sortBySrNo(arr:any) {
  return arr.sort((a:any, b:any) => a.srNo - b.srNo);
}
constructor( private api:ApiService){

}


closeSearch() {
  this.isSearchOpen = false;
}
 banners:any=[]
  bannersMobile:any=[]
  getListBanner(){
        this.banners = [];

    this.api.getapi('getListBanner').subscribe(
      (res: any) => {
   
       
        this.banners = res?.data.filter((f:any)=>f.banner_type=='DESKTOP' && f.useType=='STM');
        this.bannersMobile = res?.data.filter((f:any)=>f.banner_type=='MOBILE' && f.useType=='STM');
        this.banners=this.sortBySrNo(this.banners)
        this.bannersMobile=this.sortBySrNo(this.bannersMobile)
    //        setInterval(() => {
    //   this.currentIndex = (this.currentIndex + 1) % this.banners.length;
    //   this.currentIndexMobile = (this.currentIndexMobile + 1) % this.bannersMobile.length;
    // }, 0);
    let last = -1;
  
      },
      (error: any) => {},
    );
  }

  @ViewChild('catList', { static: true }) catList!: ElementRef;

  categories = [
    { id: 1, name: 'Pre School' },
    { id: 2, name: 'Kinder Garden' },
    { id: 3, name: 'Nursery' },
    { id: 4, name: 'LKG' },
    { id: 5, name: 'UKG' },
    { id: 6, name: 'MP Board' },
    { id: 7, name: 'CBSE' },
    { id: 8, name: 'ICSE' },
    
  ];

  products = [
    { id: 1, catId: 1, name: 'Mahavir School', image: 'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/98991775814188.png' },
    { id: 9, catId: 1, name: 'Golden School', image: 'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/98991775814188.png' },
    { id: 2, catId: 1, name: 'Narmada Nursury', image: 'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/98991775814188.png' },
    { id: 3, catId: 2, name: 'Mahersi School', image: 'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/98991775814188.png' },
    { id: 4, catId: 2, name: 'Modern School', image: 'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/98991775814188.png' },
    { id: 5, catId: 3, name: 'Aditya School', image: 'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/98991775814188.png' },
    { id: 6, catId: 4, name: 'Joy School', image: 'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/98991775814188.png' },
    { id: 7, catId: 5, name: 'MM International', image: 'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/98991775814188.png' },
        { id: 8, catId: 3, name: 'Saraswati School', image: 'https://collegetopmost.com/adminad/backend/collegetopmost/public/university/98991775814188.png' },
  ];

  selectedCategory = 1;
  loading = false;

  get filteredProducts() {
    return this.products.filter(p => p.catId === this.selectedCategory);
  }

  selectCategory(id: number) {
    this.loading = true;
    this.selectedCategory = id;

    setTimeout(() => {
      this.loading = false;
    }, 600);
  }

  scrollLeft() {
    this.catList.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
  }

  scrollRight() {
    this.catList.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
  }

  // Drag Scroll
  isDown = false;
  startX = 0;
  scrollLeftPos = 0;

  onMouseDown(e: MouseEvent) {
    this.isDown = true;
    this.startX = e.pageX - this.catList.nativeElement.offsetLeft;
    this.scrollLeftPos = this.catList.nativeElement.scrollLeft;
  }

  onMouseLeave() {
    this.isDown = false;
  }

  onMouseUp() {
    this.isDown = false;
  }

  onMouseMove(e: MouseEvent) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.catList.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2;
    this.catList.nativeElement.scrollLeft = this.scrollLeftPos - walk;
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

  ripple(event: any) {
    const card = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(card.clientWidth, card.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - card.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - card.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = card.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    card.appendChild(circle);
  }

  tilt(event: MouseEvent, card: HTMLElement) {
    if (this.isMobile()) return; // 👈 disable on mobile

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }

  resetTilt(card: HTMLElement) {
    card.style.transform = `rotateX(0) rotateY(0) scale(1)`;
  }
  parentCount = 0;
  mentorCount = 0;
  rating = 0;


  loop() {
    this.start();

    setInterval(() => {
      this.reset();
      this.start();
    }, 6000);
  }

  reset() {
    this.parentCount = 0;
    this.mentorCount = 0;
    this.rating = 0;
  }

  start() {
    this.animate('parentCount', 400);
    this.animate('mentorCount', 500);
    this.animateRating(4.8);
  }

  animate(field: 'parentCount' | 'mentorCount', target: number) {
    let count = 0;

    const interval = setInterval(() => {
      count++;
      this[field] = count;
      if (count >= target) clearInterval(interval);
    }, 8);
  }

  animateRating(target: number) {
    let val = 0;

    const interval = setInterval(() => {
      val += 0.1;
      this.rating = parseFloat(val.toFixed(1));
      if (val >= target) clearInterval(interval);
    }, 50);
  }
  onMove(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 12;
  const rotateY = (x - centerX) / 12;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

onLeave(event: MouseEvent) {
  const card = event.currentTarget as HTMLElement;
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
}
}
