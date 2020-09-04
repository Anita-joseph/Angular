import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactDetails } from './contact-details-component/contact-details-component.component';
import { PersonalDetails } from './personal-details-component/personal-details-component.component';
import { Skills } from './skills-component/skills-component.component';
import { WizardFinished } from './wizard-finished-component/wizard-finished-component.component';
import { WorkExperience } from './work-experience-component/work-experience-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutComponent,
    ContactDetails,
	PersonalDetails,
    Skills,
    WizardFinished,
    WorkExperience,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
