import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  
  // public loginModel: FormGroup = new FormGroup ({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl()});

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl();
  

  constructor(private router: Router) { 

  }

  ngOnInit() {
    
  }
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

  }

  onClear()
  {
    this.email.setValue(null);
    this.password.setValue(null);
    
    this.email.markAsPristine();
    this.email.markAsUntouched();
    this.email.updateValueAndValidity();
    
    this.password.markAsPristine();
    this.password.markAsUntouched();
    this.password.updateValueAndValidity();
  }

  onLogin()
  {
    var str = this.email.value +'\n'+this.password.value;
    this.router.navigate(['IndexPage']);
    
    window.alert(str);
  }
}