import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UniversityDetailsComponent } from '../university-details/university-details.component';
import { CompareUniversityComponent } from '../compare-university/compare-university.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { SchoolTopmostHomeComponent } from '../school-topmost-home/school-topmost-home.component';
import { CollegeBaseComponent } from './college-base/college-base.component';
// export const routesCtm: Routes = [
//   { path: '', component: HomeComponent },   // 👈 landing page
//   { path: 'home', component: HomeComponent },
//   { path: 'school-topmost', component: SchoolTopmostHomeComponent },
//   { path: 'university-details/:name', component: UniversityDetailsComponent },
//   { path: 'compare-university', component: CompareUniversityComponent },
//   { path: 'about-us', component: AboutUsComponent },
// ];
export const routesCtm: Routes = [ {
    path: '',
    component: CollegeBaseComponent,   // 👈 layout yaha
    children: [
      { path: '', component: HomeComponent },   // 👈 landing
      { path: 'home', component: HomeComponent },
      { path: 'school-topmost', component: SchoolTopmostHomeComponent },
      { path: 'university-details/:name', component: UniversityDetailsComponent },
      { path: 'compare-university', component: CompareUniversityComponent },
      { path: 'about-us', component: AboutUsComponent }
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routesCtm)],   // ✅ FIXED
  exports: [RouterModule]
})
export class CtmRoutingModule {}