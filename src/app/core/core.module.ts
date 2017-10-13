import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app.routing.module';


@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  providers: [],
})
export class CoreModule { }
