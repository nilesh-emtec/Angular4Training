import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/services/auth.guard.service';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // redirectTo: '/recipes',
    pathMatch: 'full' // to match full empty path
  },
  {
    path: 'recipes',
    loadChildren: './recipes/recipe.module#RecipeModule'
  },
  {
    path: 'shopping-list',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })], // extra config tp preload lazy loading modules
  exports: [RouterModule]
})
export class AppRoutingModule {

}
