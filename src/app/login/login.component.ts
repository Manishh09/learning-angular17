import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  #formBuilder = inject(FormBuilder)

  ngOnInit() {
    this.loginForm = this.#formBuilder.group({
      userName: ['manish.boge@ng.com'],
      password: ['ngManish']
    });
  }

  
  login() {
     
  }
}
