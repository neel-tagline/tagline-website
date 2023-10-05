import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  public title: string = 'Our Services'
  public learnMore:string ='Learn More →'
  public btnText:string = 'Contact us'
  public serviceCardDetails:serviceCard[] = [
    {
      iconUrl: '/assets/images/mobile-development-icon.webp',
      title: 'Application Management and Modernisation',
      bodyText: 'Here at Tagline, we provide the service of Application management and modernisation for the growth of your business. We update the old application with new approaches, including the latest languages, frameworks, and platforms.'
    },
    {
      iconUrl: '/assets/images/web-design-icon.webp',
      title: 'Software Product Engineering',
      bodyText: 'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products.'
    },
    {
      iconUrl: '/assets/images/software-development-1.png',
      title: 'Software outsourcing company',
      bodyText: 'Tagline Infotech is an experienced software outsourcing company that provides services for various businesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.'
    },
    {
      iconUrl: '/assets/images/It-consultant.webp',
      title: 'IT Consulting Services',
      bodyText: 'We are a leading IT consulting firm that provides the best IT consulting services to improve the scalability and performance of your company. Our team creates the most logical digital infrastructure to improve the efficiency of your business.'
    }
  ]
}

interface serviceCard{
  iconUrl:string,
  title:string,
  bodyText:string
}
