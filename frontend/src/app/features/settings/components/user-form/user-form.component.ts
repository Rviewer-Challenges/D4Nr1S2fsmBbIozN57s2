import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegexExpressions } from '@utils/regex.util';

import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { User } from '@models/user.model';
import { IUser } from '@interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private regexExpression = RegexExpressions;
  public userForm: FormGroup;
  private userActive: User;
  public message: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userActive = this.authService.getUserActive;
    this.loadForm();
  }

  loadForm() {
    const { email, name, lastName } = this.userActive;
    this.userForm = this.fb.group({
      email: [email || ''],
      name: [name || '', [Validators.required, Validators.pattern(this.regexExpression.TEXT)]],
      lastName: [lastName || '', [Validators.pattern(this.regexExpression.TEXT)]],
    });
  }

  updateUserInfo() {
    if(this.userForm.valid) {
      const userData: IUser = {
        name: this.userForm.get('name')?.value,
        lastName: this.userForm.get('lastName')?.value,
      }
      this.userService.updateUserInfo(userData).subscribe({
        next: (resp) => {
          if(resp) {
            this.message = 'information updated correctly'
          }
        },
        error: () => {
          this.message = 'something went wrong, try again'
        },
      })
    }
  }

  validateForm(field: string): boolean | undefined | null {
    const myForm = this.userForm.get(field);
    return myForm?.errors && (myForm?.dirty || myForm?.touched);
  }

  validateField(field: string, error: string): boolean | undefined | null {
    return (this.userForm.get(field)?.hasError(error));
  }

}
