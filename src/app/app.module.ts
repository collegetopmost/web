import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { HomeComponent } from './home/home.component';
// import { UniversityDetailsComponent } from './university-details/university-details.component';
// import { HeaderComponent } from './common/header/header.component';
// import { FooterComponent } from './common/footer/footer.component';
// import { CompareUniversityComponent } from './compare-university/compare-university.component';

import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
// import { PopupSignupComponent } from './common/popup-signup/popup-signup.component';
// import { SelectCityComponent } from './common/popup-signup/select-city/select-city.component';

// import { ToastComponent } from './toast/toast.component';
// import { CourseFaqComponent } from './common/course-faq/course-faq.component';
// import { AskMentorComponent } from './common/ask-mentor/ask-mentor.component';
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
// import { LoaderComponent } from './loader/loader.component';
// import { IntrestQuestionComponent } from './common/intrest-question/intrest-question.component';
// import { ShowMorePopupComponent } from './compare-university/show-more-popup/show-more-popup.component';
// import { EnquiryFormShotComponent } from './common/enquiry-form-shot/enquiry-form-shot.component';
 import { SchoolTopmostHomeComponent } from './school-topmost-home/school-topmost-home.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    // HomeComponent,
    
    FormsModule,
    // UniversityDetailsComponent,
    // CompareUniversityComponent,
   
    // HeaderComponent,
    // PopupSignupComponent,
    // SelectCityComponent,
    // FooterComponent,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    RouterOutlet,
    MatIconModule,
    NgbModule,

    // ToastComponent,
    // CourseFaqComponent,
    // AskMentorComponent,
    // EnquiryFormShotComponent,
    // LoaderComponent,
    // ShowMorePopupComponent,
    // IntrestQuestionComponent,

   //schooltopmost
   SchoolTopmostHomeComponent,

    //  SnackbarModule.forRoot(),
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [MatIconModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
