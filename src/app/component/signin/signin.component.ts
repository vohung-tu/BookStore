import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    NgIf, 
    MatFormFieldModule,   // Material Form Field
    MatInputModule,       // Material Input
    MatButtonModule,       // Material Button
    MatIcon,
    ReactiveFormsModule,
    RouterModule,
    MatCheckboxModule
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinForm: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email phải có định dạng hợp lệ
      password: ['', [Validators.required, Validators.minLength(6)]] // Password ít nhất 6 ký tự
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  // Xử lý đăng nhập
  onSubmit() {
    if (this.signinForm.valid) {
      console.log('Sign in data:', this.signinForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
