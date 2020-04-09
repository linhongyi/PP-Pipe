import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoMaterialModule } from './material-module';
import { GridListComponent } from './grid-list/grid-list.component';
import { BottomTableComponent } from './bottom-table/bottom-table.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DemoMaterialModule],
  declarations: [ AppComponent, HelloComponent, GridListComponent, BottomTableComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
 }
