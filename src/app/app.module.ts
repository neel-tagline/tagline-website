import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ClientsReviewComponent } from './clients-review/clients-review.component';
import { ClientsReviewCardComponent } from './clients-review-card/clients-review-card.component';
import { OurTechnologiesComponent } from './our-technologies/our-technologies.component';
import { OurDedicatedDeveloperComponent } from './our-dedicated-developer/our-dedicated-developer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSectionComponent,
    HeaderCarouselComponent,
    OurServicesComponent,
    ContactSectionComponent,
    CaseStudiesComponent,
    ClientsReviewComponent,
    ClientsReviewCardComponent,
    OurTechnologiesComponent,
    OurDedicatedDeveloperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
