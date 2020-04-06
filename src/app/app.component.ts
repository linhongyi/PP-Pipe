import { Component, Input } from "@angular/core";
import { MatSidenav } from '@angular/material/sidenav';
import { LeftMenuItem } from './LeftMenuItem';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  name = "Angular";
  @Input('sidenav') sidenav: MatSidenav;

  public leftMenuItems: Array<LeftMenuItem>;

  ngOnInit()
  {
    this.leftMenuItems = [
      new LeftMenuItem('Apple'),
      new LeftMenuItem('Banana'),
      new LeftMenuItem('Cherry')
    ]
  }
}