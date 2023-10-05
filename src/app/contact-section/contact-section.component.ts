import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  public experienceList: experience[] = [
    {
      iconUrl: '/assets/images/experienced-professionals.webp',
      imgAltText: 'professionals',
      experienceCount: '150+',
      title: 'Professional'
    },
    {
      iconUrl: '/assets/images/experianced-projects.webp',
      imgAltText: 'projects',
      experienceCount: '650+',
      title: 'Completed Projects'
    },
    {
      iconUrl: '/assets/images/experianced-freelancing.webp',
      imgAltText: 'freelancing',
      experienceCount: '250K+',
      title: 'Freelance Hours'
    },
    {
      iconUrl: '/assets/images/experianced-years.webp',
      imgAltText: 'years',
      experienceCount: '5+',
      title: 'Years of experience'
    }
  ]

  public experienceSection: experienceSection = {
    title: 'We have the experience',
    bodyText: 'We have got the experience to make your dream come true, and these stats speak for themselves: we have 350+ clients worldwide in only five years, and we have worked on over 650+ projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 250K+ hours of freelancing experience.',
    btnText: 'Contact Us'
  }

}

interface experience {
  iconUrl: string,
  imgAltText: string,
  experienceCount: string,
  title: string
}

interface experienceSection {
  title: string,
  bodyText: string,
  btnText: string
}