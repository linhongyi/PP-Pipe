import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl();
  
  public styleCss:Array<String> = ['redFont','largeFont'];
  
  constructor(private router: Router, private accountService:AccountService, private breakpointObserver: BreakpointObserver) { 

  }

  ngOnInit() {

     this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => 
      {
         if(result.matches==true)
         {
           this.styleCss = ['redFont','largeFont'];
         }
         else
         {
           this.styleCss = ['greenFont','smallFont'];
         }
      });
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

    this.accountService.reset();
    this.accountService.dump();
  }

  onLogin()
  {
    var loginModel = this.accountService.getLoginModel();
    loginModel.mail = this.email.value;
    loginModel.password = this.password.value;

    var str = this.email.value +'\n'+this.password.value;
    this.router.navigate(['IndexPage']);
    
    window.alert(str);
  }
}