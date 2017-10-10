import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/services/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {
  }

  storeRecipes() {
    const token = this.authService.GetToken();
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://angular-4-training.firebaseio.com/recipes.json?auth=' + token, recipes);
  }

  getRecipes() {
    const token = this.authService.GetToken();
    this.http.get('https://angular-4-training.firebaseio.com/recipes.json?auth=' + token)
      .map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
  }

}
