import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component'

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent {

}
