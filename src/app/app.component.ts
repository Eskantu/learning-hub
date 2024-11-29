import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ButtonModule } from 'primeng/button';
import { UIMenuComponent } from './Components/UI-Menu/UI-Menu.component'
import { UITopBarComponent } from './Components/ui-top-bar/ui-top-bar.component';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './Services/Authentication/authentication.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UIMenuComponent, UITopBarComponent,  ButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(public AuthService:AuthenticationService) { }

  ngOnInit(): void {
    initFlowbite();
  }
  title = 'Learnning-Hub';
}
