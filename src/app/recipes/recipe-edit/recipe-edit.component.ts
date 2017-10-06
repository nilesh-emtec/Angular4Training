import { log } from 'util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeIndex: number;
  allowEdit: boolean;
  name = '';
  description = '';
  imagePath = '';
  ingredients: Ingredient[];
  @ViewChild('f') ngForm: NgForm;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    let recipe = new Recipe('', '', '', []);
    this.ingredients = [];
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeIndex = +params['id'];
        this.allowEdit = params['id'] != null;

        if (this.allowEdit) {
          recipe = this.recipeService.getRecipe(this.recipeIndex);
          this.name = recipe.name;
          this.description = recipe.description;
          this.imagePath = recipe.imagePath;
          this.ingredients = recipe.ingredients.slice();
        }
      }
    );
  }

  onSaveRecipe(form: NgForm) {
    this.name = form.value['name'];
    this.description = form.value['description'];
    this.imagePath = form.value['imagePath'];

    const newRecipe = new Recipe(this.name, this.description, this.imagePath, this.ingredients);
    if (this.allowEdit) {
      this.recipeService.updateRecipe(this.recipeIndex, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onAddIngredient() {
    this.ingredients.push(new Ingredient(undefined, undefined));
  }

  onDeleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
