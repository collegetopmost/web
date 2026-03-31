import { Component } from '@angular/core';
import { LoaderService } from '../loader-serive/loader-serive.component';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-loader',
templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
     imports: [CommonModule],
  
})
export class LoaderComponent {
  isVisible = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.loading$.subscribe(val => {
      this.isVisible = val;
    });
  }
}
