import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {BlogServiceService} from './blog-service.service';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import {Routes , RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { ValidateComponent } from './validate/validate.component';


const appRoutes: Routes = [
  {
    path: '', component : HomePageComponent
  },
  {
    path: 'homepage', component : HomePageComponent
  },
  {
    path: 'delete/:id/:name', component : DeleteComponent
  },
  {
    path: 'edit/:id/:name', component : EditComponent
  },
  {
    path : 'login', component : LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    DeleteComponent,
    EditComponent,
    ValidateComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule , RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
