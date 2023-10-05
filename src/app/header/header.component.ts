import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public logoImg:string = '/assets/images/tagline-logo.svg';
  public headerList:string[] = ['Home','About US','Hire Developers', 'Technology', 'Industry', 'Blogs']
}
