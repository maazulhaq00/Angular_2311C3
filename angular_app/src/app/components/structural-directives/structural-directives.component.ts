import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  
  isImgVisible : boolean = true

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
