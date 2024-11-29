import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { UIModalComponent } from '../../Components/ui-modal/ui-modal.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ UIModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
