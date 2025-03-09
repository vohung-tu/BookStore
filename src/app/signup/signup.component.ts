import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    NgIf,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup;
  hidePassword = true;           // Ẩn/hiện mật khẩu
  hideConfirmPassword = true;    // Ẩn/hiện xác nhận mật khẩu

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      dob: ['', Validators.required],        // Ngày sinh
      address: [''],                        // Địa chỉ
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator // Kiểm tra mật khẩu khớp
    });
  }

  // Hàm kiểm tra mật khẩu có khớp không
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value; 
    //?. cho phép gọi .value chỉ khi form.get('password') không phải null/undefined. Nếu form.get('password') là null, nó sẽ không báo lỗi, thay vào đó trả về undefined.
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Submit form
  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Form Data:', this.signupForm.value);
      // Xử lý logic đăng ký, call API,...
    }
  }

}
