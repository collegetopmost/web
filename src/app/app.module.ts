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
import { provideHttpClient,withInterceptorsFromDi } from '@angular/common/http';
import { PopupSignupComponent } from './common/popup-signup/popup-signup.component';
import { SelectCityComponent } from './common/popup-signup/select-city/select-city.component';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomeComponent,
    FormsModule,
    UniversityDetailsComponent,
    CompareUniversityComponent,
    HeaderComponent,
    PopupSignupComponent,
    SelectCityComponent,
    FooterComponent,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    RouterOutlet,
    MatIconModule,
    NgbModule,
    ToastComponent,
    //  SnackbarModule.forRoot(),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',   
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    MatIconModule
  ],
    providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
