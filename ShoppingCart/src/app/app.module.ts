import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigateComponent } from './navigate/navigate.component';
import { FooterComponent } from './footer/footer.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { BagComponent } from './bag/bag.component';
import { CartService } from './cart.service';

const route: Routes = [
                     { path: 'electronics', component: ElectronicsComponent },
                     { path: 'fashion', component: FashionComponent },
                     { path: 'bag', component: BagComponent}];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigateComponent,
    FooterComponent,
    ElectronicsComponent,
    FashionComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
