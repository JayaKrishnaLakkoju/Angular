import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeeComponent } from './see/see.component';
import { SeeService } from './see.service';
import { IchangeDirective } from './ichange.directive';

@NgModule({
  declarations: [
    AppComponent,
    SeeComponent,
    IchangeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ SeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
