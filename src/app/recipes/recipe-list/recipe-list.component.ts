import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'Test Description', 'https://th.bing.com/th/id/OIP.pdoPE4sCpZ4DPPshT6rn1wHaLH?rs=1'),
    new Recipe('Another Test Recipe', 'Test Description', 'https://th.bing.com/th/id/OIP.pdoPE4sCpZ4DPPshT6rn1wHaLH?rs=1'),
    new Recipe('A Test Recipe 3', 'Test Description', 'https://bing.com/th?id=OSK.59e2bf9fded05ca919793d6657683eb3')
  ]

  @Output() recipeWasSelected : EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelect(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
