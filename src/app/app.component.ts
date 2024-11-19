import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { UploadFileComponent } from './Pages/upload-file/upload-file.component';
import { FlowbiteService } from '../app/Services/flowbite.service';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, UploadFileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'learning-hub';
  constructor(private flowbiteService: FlowbiteService) {}
  ngOnInit() {
    this.flowbiteService.loadFlowbite((flowbite) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
