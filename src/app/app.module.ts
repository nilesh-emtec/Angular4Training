import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightBackgroundDirective } from './directives/highlight.background.directive';
import { ForeColorDirective } from './directives/fore-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightBackgroundDirective,
    ForeColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
