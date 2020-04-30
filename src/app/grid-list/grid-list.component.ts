import { Component, OnInit } from '@angular/core';

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

 tiles: Tile[] = [
    {text: 'One', cols: 2, rows: 6, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 6, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 6, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 6, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}