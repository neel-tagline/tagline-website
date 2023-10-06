import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-ti',
  templateUrl: './why-choose-ti.component.html',
  styleUrls: ['./why-choose-ti.component.scss']
})
export class WhyChooseTiComponent {
  public title: string = 'Why Choose Tagline Infotech ?';
  public bodyText: string = 'We have a team of developers who use their expertise to provide complete web development, mobile app development, testing & assurance, SaaS development, and designing services. Tagline Infotech has a team of developers that you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for your startup or large-scale company. Our team of developers has the experience to understand the business ideas of the clients to provide solutions that focus on the core values of the business. Here you will find some benefits of hiring developers from us.'
  public whyChooseList: any = [
    {
      iconUrl: '/assets/images/choose-roadmap.png',
      index: 1,
      heading: 'Progressive Roadmap',
      bodyText: 'Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive roadmap tools like Jira, Trello, and GitHub to update the roadmap within minutes.'
    },
    {
      iconUrl: '/assets/images/choose-project.png',
      index: 2,
      heading: 'Efficient Project Management',
      bodyText: 'We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently to plan a project and deliver it on time.'
    },
    {
      iconUrl: '/assets/images/choose-flexible.svg',
      index: 3,
      heading: 'Flexible Engagement Model',
      bodyText: 'We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren’t satisfied with any model you can switch to another.'
    },
    {
      iconUrl: '/assets/images/choose-cost.png',
      index: 4,
      heading: 'Cost-Effective',
      bodyText: 'Our team of developers provides the best development services at affordable prices. We believe that high-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring models.'
    },
    {
      iconUrl: '/assets/images/choose-delivery.png',
      index: 5,
      heading: 'Consistent Delivery',
      bodyText: 'Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements.'
    }
  ]

  public dataId:number=1
}
