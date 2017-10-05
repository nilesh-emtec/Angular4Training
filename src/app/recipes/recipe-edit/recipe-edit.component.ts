import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  recipe: Recipe;
  @ViewChild('f') ngForm: NgForm;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = new Recipe('', '', '', []);
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeIndex = +params['id'];
        this.allowEdit = params['id'] != null;

        if (this.allowEdit) {
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
          console.log(this.recipe.name);
          
          this.ngForm.form.patchValue({ name: this.recipe.name });
        }
      }
    );
  }

  onSaveRecipe(form: NgForm) {
    console.log(form);
  }

}
