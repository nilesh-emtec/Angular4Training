import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShoppingListComponent } from './shopping-list.component';

const shoppingListRoutes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(shoppingListRoutes)],
  exports: [
    RouterModule,
    FormsModule,
    HttpModule]
})
export class ShoppingListRoutingModule { }
