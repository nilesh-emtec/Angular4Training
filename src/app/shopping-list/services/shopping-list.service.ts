import { Ingredient } from '../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientChanges = new Subject<Ingredient[]>();
    ingredientEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Test Ingredient 1', 100.00),
        new Ingredient('Test Ingredient 2', 150.00)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanges.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients); // spread operator to covert array to list
        this.ingredientChanges.next(this.ingredients.slice());
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientChanges.next(this.ingredients.slice());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientChanges.next(this.ingredients.slice());
    }
}
