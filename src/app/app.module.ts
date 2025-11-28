import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { CompareUniversityComponent } from './compare-university/compare-university.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeComponent,
    UniversityDetailsComponent,
    CompareUniversityComponent,
    HeaderComponent,
    FooterComponent,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    RouterOutlet,
    MatIconModule,
    NgbModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',   
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
