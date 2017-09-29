import { Recipe } from '../recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('Recipe 1', 'This is the Recipe 1', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
        new Recipe('Recipe 2', 'This is the Recipe 2', 'http://media2.sailusfood.com/wp-content/uploads/2016/02/cheese-corn-balls-recipe.jpg'),
    ];

    getRecipes() {
        return this.recipes.slice(); // To return a new array
    }
}
