import { Component, Input } from "@angular/core";
import { MatSidenav } from '@angular/material/sidenav';
import { LeftMenuItem } from './LeftMenuItem';
import { AccountService } from './account.service';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  name = "Angular";
  @Input('sidenav') sidenav: MatSidenav;

  public leftMenuItems: Array<LeftMenuItem>;

  constructor(public accountService:AccountService){};

  ngOnInit()
  {
    this.leftMenuItems = [
      new LeftMenuItem('Apple'),
      new LeftMenuItem('Banana'),
      new LeftMenuItem('Cherry')
    ]
  }

  onLogout() 
  {
    this.accountService.reset();
    this.accountService.dump();

    window.alert('Log out');
  }

  onClickSettings()
  {
    window.alert('settings');
  }

  isLogin():Boolean
  {
    return this.accountService.isLogin();
  }
}