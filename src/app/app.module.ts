import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { HeaderCarouselComponent } from './header-carousel/header-carousel.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ExperienceSectionComponent } from './experience-section/experience-section.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { ClientsReviewComponent } from './clients-review/clients-review.component';
import { ClientsReviewCardComponent } from './clients-review-card/clients-review-card.component';
import { OurTechnologiesComponent } from './our-technologies/our-technologies.component';
import { OurDedicatedDeveloperComponent } from './our-dedicated-developer/our-dedicated-developer.component';
import { WhyChooseTiComponent } from './why-choose-ti/why-choose-ti.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSectionComponent,
    HeaderCarouselComponent,
    OurServicesComponent,
    ExperienceSectionComponent,
    CaseStudiesComponent,
    ClientsReviewComponent,
    ClientsReviewCardComponent,
    OurTechnologiesComponent,
    OurDedicatedDeveloperComponent,
    WhyChooseTiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
