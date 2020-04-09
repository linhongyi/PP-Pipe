import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: string;
  assign: string;
  symbol: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'About', name: 'Hydrogen', assign: 'you', symbol: 'H'},
  {position: 'Jobs', name: 'Helium', assign: 'he', symbol: 'He'},
  {position: 'Blog', name: 'Lithium', assign: 'she', symbol: 'Li'},
  {position: 'Newsroom', name: 'Beryllium', assign: 'I', symbol: 'Be'},
  {position: '', name: 'Boron', assign: 'QQQ', symbol: 'B'},
  {position: '', name: 'Carbon', assign: '', symbol: 'C'},
  {position: '', name: 'Nitrogen', assign: '', symbol: 'N'},
  {position: '', name: 'Oxygen', assign: '', symbol: 'O'},
  {position: '', name: 'Fluorine', assign: '', symbol: 'F'},
  {position: '', name: 'Neon', assign: '', symbol: 'Ne'},
];


@Component({
  selector: 'app-bottom-table',
  templateUrl: './bottom-table.component.html',
  styleUrls: ['./bottom-table.component.css']
})


export class BottomTableComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'assign', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
