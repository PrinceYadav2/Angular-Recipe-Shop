import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 3),
    ]
    constructor() {

    }

    getIngredients() {
        return this.ingredients.slice();
    }

    ingredientAdded: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    addIngredientsFromRecipe(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientAdded.emit(this.ingredients.slice());
    }

    // ingredientAdded(ingredient: ingre) {

    // }
}