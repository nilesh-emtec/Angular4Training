import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  AddIngredient() {
    const iName = this.nameInputRef.nativeElement.value;
    const iAmount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(iName, iAmount);
    this.shoppingListService.ingredientAdded.emit(ingredient);
  }
}
