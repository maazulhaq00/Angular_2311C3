import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  
  isImgVisible : boolean = true

  password : string = ""
  cpassword : string = "" 

  citiesArr : string[] = ["Karachi", "Lahore", 
  "Islamabad", "Quetta", "Peshawar"] 

  students : any[] = [
    {name: "Ahmed", Age: 22, batchCode: "2311C3"}, 
    {name: "Saad", Age: 23,  batchCode: "2311C3"}, 
    {name: "Sarah", Age: 25,  batchCode: "2311C3"}
  ]

  hideImg(){
    this.isImgVisible = false
  }
  showImg(){
    this.isImgVisible = true
  }

  toggleImg(){
    // if(this.isImgVisible == true){
    //   this.isImgVisible = false
    // }
    // else{
    //   this.isImgVisible = true
    // }

    this.isImgVisible = !this.isImgVisible
  }
}
