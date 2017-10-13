import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from '../auth/services/auth.guard.service';

const recipeRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [{
      path: '',
      component: RecipeStartComponent
    }, {
      path: 'new',
      component: RecipeEditComponent,
      canActivate: [AuthGuard]
    }, {
      path: ':id',
      component: RecipeDetailComponent
    }, {
      path: ':id/edit',
      component: RecipeEditComponent,
      canActivate: [AuthGuard]
    }, {
      path: '**',
      component: PageNotFoundComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [
    RouterModule,
    FormsModule,
    HttpModule]
})
export class RecipeRoutingModule {

}
