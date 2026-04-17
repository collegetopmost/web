import { Component } from '@angular/core';

@Component({
  selector: 'app-school-topmost-home',
  imports: [],
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


closeSearch() {
  this.isSearchOpen = false;
}
}
