import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Services/Authentication/authentication.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private AuthService:AuthenticationService) {}
  ngOnInit(): void {}

  fnLogin() {
    this.router.navigate(['/Home']);
    this.AuthService.setFakeToken('fakeToken');
  }
}
