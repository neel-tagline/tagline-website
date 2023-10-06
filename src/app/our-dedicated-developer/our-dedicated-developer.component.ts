import { Component } from '@angular/core';

@Component({
  selector: 'app-our-dedicated-developer',
  templateUrl: './our-dedicated-developer.component.html',
  styleUrls: ['./our-dedicated-developer.component.scss']
})
export class OurDedicatedDeveloperComponent {
  public title :string = 'Our Dedicated Developers'
  public hireDevelopersSection:hireDevelopers[] = [
    {
      mainBoxClass:'col-6 pe-3',
      title: 'Hire Mobile App Developers',
      techList: [
        {
          boxclass: 'col-6',
          imgUrl:'/assets/images/react_native_color.svg',
          imgAltText: 'react_native_logo',
          bodyText: 'Hire React Native Developers'
        },
        {
          boxclass: 'col-6',
          imgUrl:'/assets/images/flutter_color.svg',
          imgAltText: 'flutter_logo',
          bodyText: 'Hire Flutter Developers'
        }
      ]
    },
    {
      mainBoxClass:'col-6 ps-3',
      title: 'Hire Front-End Developers',
      techList: [
        { 
          boxclass: 'col-6',
          imgUrl:'/assets/images/angular_color.svg',
          imgAltText: 'angular_logo',
          bodyText: 'Hire AngularJS Developers'
        },
        {
          boxclass: 'col-6',
          imgUrl:'/assets/images/react_native_color.svg',
          imgAltText: 'react_native_logo',
          bodyText: 'Hire ReactJS Developers'
        }
      ]
    },
    {
      mainBoxClass:'col-12 pt-4',
      title: 'Hire Back-End Developers',
      techList: [
        {
          boxclass: 'col-4',
          imgUrl:'/assets/images/angular_color.svg',
          imgAltText: 'angular_logo',
          bodyText: 'Hire Python Developers'
        },
        {
          boxclass: 'col-4',
          imgUrl:'/assets/images/react_native_color.svg',
          imgAltText: 'react_native_logo',
          bodyText: 'Hire ROR Developers'
        },
        {
          boxclass: 'col-4',
          imgUrl:'/assets/images/react_native_color.svg',
          imgAltText: 'react_native_logo',
          bodyText: 'Hire Node.js Developers'
        }
      ]
    }
    
  ]
}
interface tech{
  boxclass: string,
  imgUrl:string,
  imgAltText: string,
  bodyText: string
}
interface hireDevelopers{
  mainBoxClass:string,
  title: string,
  techList: tech[]
}