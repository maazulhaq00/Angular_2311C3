import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  
  mode : string = "light"
  
  isLight : boolean = true

  students : any[] = [
    {name: "Ahmed", Age: 22, batchCode: "2311C3"}, 
    {name: "Saad", Age: 17,  batchCode: "2311C3"}, 
    {name: "Sarah", Age: 19,  batchCode: "2311C3"},
    {name: "Bilal", Age: 23,  batchCode: "2311C3"}, 
    {name: "Khalid", Age: 25,  batchCode: "2311C3"}
  ]


  switchToDarkMode(){
    this.mode = "dark"
  }
  switchToLightMode(){
    this.mode = "light"
  }

  switchMode(){
    if(this.mode == "light"){
      this.mode = "dark"
    }
    else {
      this.mode = "light"
    }
  }

  toggleMode(){
    this.isLight = !this.isLight
  }



}
