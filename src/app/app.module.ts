import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
import { from } from 'rxjs';
import { ShowComponent } from './show/show.component';
import {HttpClientModule} from '@angular/common/http';   
import { httpservice } from './services/httpservice.service';
import {AgGridModule} from 'ag-grid-angular';
import { HeaderComponent } from './header/header.component'


@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    ShowComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [httpservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
