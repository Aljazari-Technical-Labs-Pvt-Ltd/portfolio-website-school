import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component'

@Component({              
  selector: 'app-about-us',
  imports: [NavbarComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true
})               
export class AboutUsComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const aboutSection = document.querySelector('.about-container');
    if (aboutSection) {
      const rect = aboutSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        this.isVisible = true;
        aboutSection.classList.add('visible');
      }
    }
  }
}
