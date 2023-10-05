import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:string = 'ti-demo dsfsdf';
public user:any = {
  age:20,
  name:'Tejas'
}
public users = [1,2,3]
  /**
   *
   */
  constructor() {
    setTimeout(() => {
      this.title = 'New title';
    }, 5000);
  }


  saveData(){
    console.log("Hello");
    
  }
}
