import { Ingredient } from '../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredient>();
    private ingredients: Ingredient[] = [
        new Ingredient('Test Ingredient 1', 100.00),
        new Ingredient('Test Ingredient 2', 150.00)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        return this.ingredients.push(ingredient);
    }
}
