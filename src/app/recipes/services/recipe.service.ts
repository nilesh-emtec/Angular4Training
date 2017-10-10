import { Recipe } from '../recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipeSaved = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe(
            'Recipe 1',
            'This is the Recipe 1',
            'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
            [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]
        ),
        new Recipe(
            'Recipe 2',
            'This is the Recipe 2',
            'http://media2.sailusfood.com/wp-content/uploads/2016/02/cheese-corn-balls-recipe.jpg',
            [new Ingredient('Vegetables', 10), new Ingredient('Milk', 5)]
        ),
    ];

    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice(); // To return a new array
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeSaved.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipeSaved.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeSaved.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeSaved.next(this.recipes.slice());
    }
}
