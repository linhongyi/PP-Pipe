import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css'],
})

export class GridListComponent implements OnInit {
 
 cols:number = 4;

 tiles: Tile[];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() 
  {
      this.breakpointObserver.observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        if(result.matches==true)
        {
           this.tiles = [
            {text: 'One', cols: this.cols, rows: 6, color: 'lightblue'},
            {text: 'Two', cols: this.cols, rows: 6, color: 'lightgreen'},
            {text: 'Three', cols: this.cols, rows: 6, color: 'lightpink'},
            {text: 'Four', cols: this.cols, rows: 6, color: '#DDBDF1'},
          ];
        }
        else
        {
          this.tiles = [
            {text: 'One', cols: 2, rows: 6, color: 'lightblue'},
            {text: 'Two', cols: 2, rows: 6, color: 'lightgreen'},
            {text: 'Three', cols: 2, rows: 6, color: 'lightpink'},
            {text: 'Four', cols: 2, rows: 6, color: '#DDBDF1'},
          ];
        }
    });
    
  }
}