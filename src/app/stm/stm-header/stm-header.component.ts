import { Component } from '@angular/core';

@Component({
  selector: 'app-stm-header',
  imports: [],
  templateUrl: './stm-header.component.html',
  styleUrl: './stm-header.component.scss'
})
export class StmHeaderComponent {
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
