import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactDetails } from './contact-details-component/contact-details-component.component';
import { PersonalDetails } from './personal-details-component/personal-details-component.component';
import { Skills } from './skills-component/skills-component.component';
import{ WizardFinished } from './wizard-finished-component/wizard-finished-component.component';
import { WorkExperience} from './work-experience-component/work-experience-component.component';

const routes: Routes = [
{path:"dashboard", component:DashboardComponent},
{path:"about", component:AboutComponent},
{path:"contact-details-component", component:ContactDetails},
{path:"personal-details-component", component:PersonalDetails},
{path:"skills-component", component:Skills},
{path:"wizard-finished-component", component:WizardFinished},
{path:"work-experience-component", component:WorkExperience},
{path:"", redirectTo:"dashboard", pathMatch:"full"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
