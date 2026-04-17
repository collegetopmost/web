import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { routesCtm } from './ctm-routing.module';

// Standalone components (ONLY these go in imports)
import { HomeComponent } from '../home/home.component';
import { UniversityDetailsComponent } from '../university-details/university-details.component';
import { CompareUniversityComponent } from '../compare-university/compare-university.component';
import { CompareUniversityCloneComponent } from '../common/compare-university-clone/compare-university-clone.component';
import { PopupSignupComponent } from '../common/popup-signup/popup-signup.component';
import { SelectCityComponent } from '../common/popup-signup/select-city/select-city.component';
import { FooterComponent } from '../common/footer/footer.component';
import { ToastComponent } from '../toast/toast.component';
import { CourseFaqComponent } from '../common/course-faq/course-faq.component';
import { AskMentorComponent } from '../common/ask-mentor/ask-mentor.component';
import { EnquiryFormShotComponent } from '../common/enquiry-form-shot/enquiry-form-shot.component';
import { LoaderComponent } from '../loader/loader.component';
import { ShowMorePopupComponent } from '../compare-university/show-more-popup/show-more-popup.component';
import { IntrestQuestionComponent } from '../common/intrest-question/intrest-question.component';
import { CollegeBaseComponent } from './college-base/college-base.component';
import { CtmRoutingModule } from './ctm-routing.module';
@NgModule({
  declarations: [
    // 👉 agar koi NON-standalone component hai to yaha daalo
  ],
  imports: [
    CommonModule,
    FormsModule,
    CtmRoutingModule,

    // ✅ Routing (ONLY ONCE)
    RouterModule.forChild(routesCtm),

    // ✅ Standalone Components
    HomeComponent,
    UniversityDetailsComponent,
    CompareUniversityComponent,
    CompareUniversityCloneComponent,
    PopupSignupComponent,
    SelectCityComponent,
    FooterComponent,
    ToastComponent,
    CourseFaqComponent,
    AskMentorComponent,
    EnquiryFormShotComponent,
    LoaderComponent,
    ShowMorePopupComponent,
    IntrestQuestionComponent,
    CollegeBaseComponent,

    // ✅ Modules
    MatIconModule,
    NgbModule
  ],
  providers: [],
})
export class CtmModule {}