import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent {
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

  public contactImgUrl: imgUrl = {
    contactWoman: '/assets/images/contact-woman.webp',
    contactWomanAlttext: 'contact-woman',
    chatBubble: '/assets/images/chat-bubble.webp',
    chatBubbleAlttext: 'chat-bubble'
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

interface imgUrl {
  contactWoman: string,
  contactWomanAlttext: string,
  chatBubble: string,
  chatBubbleAlttext: string
}