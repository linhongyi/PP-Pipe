import { Injectable } from '@angular/core';
import { LoginModel } from './login-model'

@Injectable()
export class AccountService {

  public loginModel : LoginModel;

  constructor() { 
    this.loginModel = new LoginModel();
    this.reset();
  }

  getLoginModel() : LoginModel
  {
    return this.loginModel;
  }
  
  
  reset()
  {
    this.loginModel.mail = '';
    this.loginModel.password = '';
  }

  dump()
  {
    var str = 'mail: '+ this.loginModel.mail +'\npasword:'+this.loginModel.password;

    console.log(str);
  }

  isLogin():Boolean
  {
     var result: boolean = false;

     if(this.loginModel.mail.length>0)
     {
        result = true;  
     }

     return result;
  }
}