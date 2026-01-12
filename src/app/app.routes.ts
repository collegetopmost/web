import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { CompareUniversityComponent } from './compare-university/compare-university.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'university-details/:id', component: UniversityDetailsComponent },
    { path: 'compare-university', component: CompareUniversityComponent },
    { path: 'about-us', component: AboutUsComponent },
];
