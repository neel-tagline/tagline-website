import { Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.scss']
})
export class CaseStudiesComponent {

  public caseStudiesList: caseStudies[] = [
    {
      class: 'col-5 recognize',
      imgUrl: '/assets/images/recognize-white-logo.png',
      imgAltText: 'recognize-logo',
      bodyText: 'Recognition, manage nominations, offer rewards, & automate service anniversaries. By developing such a recognized application.'
    },
    {
      class: 'col-7 promoprep',
      imgUrl: '/assets/images/promoprep-white-logo.png',
      imgAltText: 'promoprep-logo',
      bodyText: 'Recognition, manage nominations, offer rewards, & automate service anniversaries. By developing such a recognized application.'
    },
    {
      class: 'col-6 investing',
      imgUrl: '/assets/images/investing-white-logo.png',
      imgAltText: 'investing-logo',
      bodyText: 'Make better stock investing decisions by joining the most exclusive community of stock investors. Learn, share & grow through authentic real-time discussion.'
    },
    {
      class: 'col-3 jeeve',
      imgUrl: '/assets/images/jeeve-white-logo.png',
      imgAltText: 'jeeve-logo',
      bodyText: 'Complete Business Solutions for your dental clinic.'
    },
    {
      class: 'col-3 care-clinic',
      imgUrl: '/assets/images/care-clinic-white-logo.png',
      imgAltText: 'care-clinic-logo',
      bodyText: 'Build Healthy Habits. Stay Accountable. Share, Learn & Act on Insights.'
    }
  ]
}

interface caseStudies {
  class: string,
  imgUrl: string,
  imgAltText: string,
  bodyText: string
}