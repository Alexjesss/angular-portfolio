import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingPageComponent } from './components/landingPage/landingpage.component';

const routes: Routes = [{path: '', component: LandingPageComponent },
  {
    path: 'homepage',
    component: HomepageComponent,
  }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
