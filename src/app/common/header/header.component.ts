import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { PopupSignupComponent } from '../popup-signup/popup-signup.component';
import { Router } from '@angular/router';
import { CdkAutofill } from "@angular/cdk/text-field";

@Component({
  selector: 'app-header',
  imports: [MatIconModule, CdkAutofill],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private dialog: MatDialog, private router: Router) { }
  isMenuOpen = false;
  openRagistration() {
    this.toggleMenu();
    this.dialog.open(PopupSignupComponent, {
      width: '500px'
    });
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openUniversity() {
    this.toggleMenu();
    this.router.navigate(['university-details/1']);
  }
  openHome() {
    this.toggleMenu();
    this.router.navigate(['home']);
  }
  openAbout() {
    this.toggleMenu();
    this.router.navigate(['about-us']);
  }
  openCompaired() {
    this.toggleMenu();
    this.router.navigate(['compare-university']);
  }
}
