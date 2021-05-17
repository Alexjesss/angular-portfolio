import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingPageComponent } from './components/landingPage/landingpage.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [{path: '', component: LandingPageComponent },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
