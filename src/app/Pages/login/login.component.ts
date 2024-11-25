import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button'
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule,Button, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm = new FormControl('');
  submitted = false;
  /**
   *
   */
  constructor(private formBuilder:FormBuilder) {
  }
  ngOnInit(): void {
  }

}
