import { Ingredient } from '../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientChanges = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Test Ingredient 1', 100.00),
        new Ingredient('Test Ingredient 2', 150.00)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanges.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); // spread operator to covert array to list
        this.ingredientChanges.next(this.ingredients);
    }
}
