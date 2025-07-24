import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component'

@Component({
  selector: 'app-academics',
  imports: [NavbarComponent],
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css'],
  standalone: true
})
export class AcademicsComponent {}
