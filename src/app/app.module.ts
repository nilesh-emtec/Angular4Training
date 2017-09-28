import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerlistComponent } from './components/serverlist/serverlist.component';
import { CreateserverComponent } from './components/createserver/createserver.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerlistComponent,
    CreateserverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
