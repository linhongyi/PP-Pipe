import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DemoMaterialModule } from './material-module';
import { GridListComponent } from './grid-list/grid-list.component';
import { BottomTableComponent } from './bottom-table/bottom-table.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { CardViewComponent } from './card-view/card-view.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountService } from './account.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/IndexPage', pathMatch: 'full'},
  { path: 'LoginPage', component: LoginPageComponent },
  { path: 'IndexPage', component: IndexPageComponent }
];



@NgModule({
  imports:      [ BrowserModule, 
  FormsModule,
  ReactiveFormsModule,
  DemoMaterialModule,  
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  declarations: [ AppComponent, HelloComponent, GridListComponent, BottomTableComponent, TabGroupComponent, CardViewComponent, LoginPageComponent, IndexPageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AccountService]
})
export class AppModule {
 }
