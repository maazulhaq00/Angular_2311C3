import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName : string = "Angular with TypeScript";
  inputType : string = "text";
  imgUrl : string = "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"

  changeCoureName(){
    this.courseName = "React JS"
  }

  showAlert(message : string){
    alert(message);
  }
}
