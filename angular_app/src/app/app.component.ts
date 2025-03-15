import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent, StructuralDirectivesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_app';
}
