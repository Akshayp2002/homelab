import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PortsComponent } from '../ports/ports.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, PortsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  
}
