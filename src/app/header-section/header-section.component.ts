import { Component } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent {
  public headerSection:headerSection = {
    title:['Software Development Company & IT Consultancy Serving','Start-UPs To Fortune 500'],
    bodyText:'With the help of Innovation and Technology, We give you the power to change the world with your ideas.',
    buttonText:'Schedule a meeting',
  }
}

interface headerSection {
  title:string[],
  bodyText:string,
  buttonText:string
}