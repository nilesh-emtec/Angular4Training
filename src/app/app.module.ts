import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { RecipeService } from './recipes/services/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/services/auth.service';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    CoreModule
  ],
  providers: [ShoppingListService, RecipeService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
