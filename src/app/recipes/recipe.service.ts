import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Test Description', 'https://th.bing.com/th/id/OIP.pdoPE4sCpZ4DPPshT6rn1wHaLH?rs=1', [ new Ingredient('Potato', 2), new Ingredient('Meat', 1)]),
        new Recipe('Another Test Recipe', 'Test Description', 'https://th.bing.com/th/id/OIP.pdoPE4sCpZ4DPPshT6rn1wHaLH?rs=1', [ new Ingredient('Chocolate', 6), new Ingredient('Milk', 1)]),
        new Recipe('A Test Recipe 3', 'Test Description', 'https://bing.com/th?id=OSK.59e2bf9fded05ca919793d6657683eb3', [ new Ingredient('Egg', 2), new Ingredient('Bread', 3)])
    ];

    selectedRecipe : EventEmitter<Recipe> = new EventEmitter<Recipe>();

    getRecipes() {
        return this.recipes.slice();
    }

    constructor(private shoppingListService: ShoppingListService) {

    }

    getRecipeByID(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsFromRecipe(ingredients);   
    }
}