import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe : Recipe;
  id: number;

  constructor(private recipeService : RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.selectedRecipe = this.recipeService.getRecipeByID(this.id);
      }
    )
  }

  addIngredients() {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
  
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
