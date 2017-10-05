import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') form: NgForm;

  ingredientEditingSubscription: Subscription;
  editedIngredient: Ingredient;
  ingredientIndex: number;
  editMode = false;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientEditingSubscription = this.shoppingListService.ingredientEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.ingredientIndex = index;
        // fetch the ingredient
        this.editedIngredient = this.shoppingListService.getIngredient(index);

        this.form.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount
        });
      }
    );
  }

  AddIngredient(form: NgForm) {
    const values = form.value;
    const ingredient = new Ingredient(values.name, values.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.ingredientIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.ingredientEditingSubscription.unsubscribe();
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.ingredientIndex);
    this.onClear();
  }
}
