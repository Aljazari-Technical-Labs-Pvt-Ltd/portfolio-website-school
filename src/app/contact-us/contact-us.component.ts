import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component'

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
