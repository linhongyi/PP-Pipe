import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  
  isHandeset: Observable<boolean>;
  
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.isHandeset = this.breakpointObserver.observe(Breakpoints.Handset).map(match => match.matches);
  }

}