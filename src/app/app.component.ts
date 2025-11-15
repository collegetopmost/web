import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})
export class AppComponent {
  title = 'college-Topmost';

  @HostListener('window:scroll')
  onScroll() {
    const bar = document.getElementById('top_navigation_bar');
    if (window.scrollY > 50) bar?.classList.add('scrolled');
    else bar?.classList.remove('scrolled');
  }

}
