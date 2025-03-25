import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';

export const routes: Routes = [
    {
        path: '',
        component: AddEmployeeComponent
    },  
    {
        path: 'add-emp',
        component: AddEmployeeComponent
    },    
    {
        path: 'emp-list',
        component: EmployeeListComponent
    },    
    {
        path: 'data-binding',
        component: DataBindingComponent
    },    
    {
        path: 'sd',
        component: StructuralDirectivesComponent
    },    
    {
        path: 'ad',
        component: AttributeDirectiveComponent
    },
];
