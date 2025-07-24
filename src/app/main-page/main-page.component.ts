import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar/navbar.component'

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    if (this.backgroundVideo?.nativeElement) {
      const video = this.backgroundVideo.nativeElement;
      video.muted = true; // ✅ MUTE THE VIDEO
      video.play().catch((error) => {
        console.error('Video play error:', error);
      });
    }
  }

  navigateToSolution() {
    this.router.navigate(['academics']);
  }
}
