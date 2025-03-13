import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  imports: [],
  template: '<ul> <li class="primary">Ali</li> <li class="secondary">Khalid</li> <li>Sarah</li> </ul>',
  styles: ['.primary{color: blue}', '.secondary{color: gray}']
})
export class EmployeeListComponent {

}
