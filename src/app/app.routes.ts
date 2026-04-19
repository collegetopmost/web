
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { CompareUniversityComponent } from './compare-university/compare-university.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SchoolTopmostHomeComponent } from './school-topmost-home/school-topmost-home.component';
export const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'school-topmost', component: SchoolTopmostHomeComponent },
    // { path: 'university-details/:name', component: UniversityDetailsComponent },
    // { path: 'compare-university', component: CompareUniversityComponent },
  
    // { path: 'about-us', component: AboutUsComponent },
        {
    path: '',
    loadChildren: () => import('./ctm/ctm.module').then(m => m.CtmModule)
  },
      {
    path: 'school-top-most',
    loadChildren: () => import('./stm/stm.module').then(m => m.StmModule)
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class AppRoutingModule { }